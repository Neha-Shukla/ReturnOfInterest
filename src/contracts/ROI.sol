// SPDX-License-Identifier:UNLICENSED
pragma solidity >=0.4.21 <0.7.0;

contract ReturnOnInterest {
    uint256 public currUserId = 0;
    uint256 public totalWithdrawn = 0;
    uint256 internal activeUserId = 1;
    uint256 public totalInvestment = 0;
    struct User {
        bool isExist;
        uint256 id;
        uint256 entryTime;
        uint256 investment;
        uint256 balanceReceived;
        uint256 expired;
        uint256 referals;
        uint256 referalAmount;
        uint256 dailyAmount;
        uint256 incomeWithdrawn;
        address referedBy;
    }

    mapping(address => User) internal users;
    mapping(uint256 => address) internal userlist;

    //enter by investing amount, get entryTime and expiry time through js
    function Enter(uint256 _entryTime) public payable {
        require(users[msg.sender].isExist == false, "user already exist");
        uint256 _amount = msg.value;
        require(_amount >= 0.1 ether, "Insufficient balance");
        totalInvestment += _amount;
        currUserId += 1;
        User memory user = User({
            isExist: true,
            id: currUserId,
            entryTime: _entryTime,
            investment: _amount,
            balanceReceived: 0,
            expired: _entryTime + (10 * 1 days),
            referals: 0,
            referalAmount: 0,
            dailyAmount: 0,
            incomeWithdrawn: 0,
            referedBy: address(0)
        });

        users[msg.sender] = user;
        userlist[currUserId] = msg.sender;
    }

    function enterThroughReferals(address _refererId, uint256 _entryTime)
        public
        payable
    {
        require(users[msg.sender].isExist == false, "user already exist");
        uint256 _amount = msg.value;
        require(users[_refererId].isExist, "incorrect referal id");
        require(_amount >= 0.1 ether, "Insufficient balance");
        totalInvestment += _amount;
        currUserId += 1;
        User memory user = User({
            isExist: true,
            id: currUserId,
            entryTime: _entryTime,
            investment: _amount,
            balanceReceived: 0,
            expired: _entryTime + (10 * 1 days),
            referals: 0,
            referalAmount: 0,
            dailyAmount: 0,
            incomeWithdrawn: 0,
            referedBy: _refererId
        });

        users[msg.sender] = user;
        userlist[currUserId] = msg.sender;

        if (users[_refererId].referals == 0) {
            users[_refererId].referalAmount += (_amount * 10) / 100;
            users[_refererId].referals += 1;
        } else if (users[_refererId].referals == 1) {
            users[_refererId].referalAmount += (_amount * 20) / 100;
            users[_refererId].referals += 1;
        } else if (users[_refererId].referals >= 2) {
            users[_refererId].referalAmount += (_amount * 30) / 100;
            users[_refererId].referals += 1;
        }
    }

    function sendROI() public {
        for (uint256 i = 1; i <= currUserId; i++) {
            users[userlist[i]].balanceReceived += getROI(
                users[userlist[i]].investment
            );
            users[userlist[i]].expired -= 1 days;
            if (users[userlist[i]].expired == users[userlist[i]].entryTime)
                users[msg.sender].isExist = false;
        }
    }

    function withdraw() public {
        uint256 _amount = users[msg.sender].balanceReceived +
            users[msg.sender].referalAmount;
        totalWithdrawn += _amount;
        address(uint256(msg.sender)).transfer(_amount);
        users[msg.sender].referalAmount = 0;
        users[msg.sender].incomeWithdrawn += _amount;
        users[msg.sender].balanceReceived = 0;
    }

    function getReferals(address _account) public view returns (uint256) {
        return users[_account].referals;
    }

    function getReferalsIncome(address _account) public view returns (uint256) {
        return users[_account].referalAmount;
    }

    function getDailyAmount() public view returns (uint256) {
        uint256 dailyAmount = 0;
        for (uint256 i = activeUserId; i <= currUserId; i++) {
            dailyAmount += getROI(users[userlist[i]].investment);
        }
        return dailyAmount;
    }

    function getROI(uint256 _amount) public pure returns (uint256) {
        return (5 * _amount) / 100;
    }

    function getUserDailyIncome(address _account)
        public
        view
        returns (uint256)
    {
        uint256 _amount = users[_account].investment;
        return (5 * _amount) / 100;
    }

    function getIncomeWithdrawnToWallet(address _account)
        public
        view
        returns (uint256)
    {
        return users[_account].incomeWithdrawn;
    }

    function getExpiry() public view returns(uint256){
        return users[msg.sender].expired;
    }
}

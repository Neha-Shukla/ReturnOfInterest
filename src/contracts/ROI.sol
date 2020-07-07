// SPDX-License-Identifier:UNLICENSED
pragma solidity >=0.4.21 <0.7.0;

contract ReturnOnInterest {
    uint256 public currUserId;
    struct User {
        bool isExist;
        uint256 id;
        uint256 entryTime;
        uint256 investment;
        uint256 balanceReceived;
        uint256 expired;
        uint256 referals;
    }

    struct EntryAmountAndDays {
        uint256 amount;
        uint256 expired;
        uint256 roi;
    }

    EntryAmountAndDays public emd;
    mapping(address => User) public users;
    mapping(uint256 => EntryAmountAndDays) public noOfDays;
    mapping(uint256 => address) public userlist;

    constructor() public {
        uint256 i = 1;
        EntryAmountAndDays memory emd1 = EntryAmountAndDays({
            amount: 0.1 ether,
            expired: 40,
            roi: (0.1 ether * 5) / 100
        });
        noOfDays[i] = emd1;
        i++;
        EntryAmountAndDays memory emd2 = EntryAmountAndDays({
            amount: 0.2 ether,
            expired: 50,
            roi: (0.2 ether * 5) / 100
        });
        noOfDays[i] = emd2;
        i++;
        EntryAmountAndDays memory emd3 = EntryAmountAndDays({
            amount: 0.3 ether,
            expired: 50,
            roi: (0.3 ether * 5) / 100
        });
        noOfDays[i] = emd3;
        i++;
        EntryAmountAndDays memory emd4 = EntryAmountAndDays({
            amount: 0.5 ether,
            expired: 60,
            roi: (0.5 ether * 5) / 100
        });
        noOfDays[i] = emd4;
        i++;
        EntryAmountAndDays memory emd5 = EntryAmountAndDays({
            amount: 1 ether,
            expired: 60,
            roi: (1 ether * 5) / 100
        });
        noOfDays[i] = emd5;
        i++;
        EntryAmountAndDays memory emd6 = EntryAmountAndDays({
            amount: 2 ether,
            expired: 60,
            roi: (2 ether * 5) / 100
        });
        noOfDays[i] = emd6;
        i++;
        EntryAmountAndDays memory emd7 = EntryAmountAndDays({
            amount: 3 ether,
            expired: 60,
            roi: (3 ether * 5) / 100
        });
        noOfDays[i] = emd7;
        i++;
        EntryAmountAndDays memory emd8 = EntryAmountAndDays({
            amount: 5 ether,
            expired: 60,
            roi: (5 ether * 5) / 100
        });
        noOfDays[i] = emd8;
        i++;
        EntryAmountAndDays memory emd9 = EntryAmountAndDays({
            amount: 10 ether,
            expired: 60,
            roi: (10 ether * 5) / 100
        });
        noOfDays[i] = emd9;
        i++;
        EntryAmountAndDays memory emd10 = EntryAmountAndDays({
            amount: 15 ether,
            expired: 60,
            roi: (15 ether * 5) / 100
        });
        noOfDays[i] = emd10;
    }

    //enter by investing amount, get entryTime and expiry time through js
    function Enter(uint256 _entryTime) public payable {
        require(users[msg.sender].isExist == false, "user already exist");
        uint256 _amount = msg.value;
        require(_amount >= 0.1 ether, "Insufficient balance");
        currUserId += 1;
        User memory user = User({
            isExist: true,
            id: currUserId,
            entryTime: _entryTime,
            investment: _amount,
            balanceReceived: 0,
            expired: _entryTime + getExpiryDate(_amount),
            referals: 0
        });

        users[msg.sender] = user;
        userlist[currUserId] = msg.sender;
    }

    function enterThroughReferals(uint256 _refererId, uint256 _entryTime)
        public
        payable
    {
        require(users[msg.sender].isExist == false, "user already exist");
        uint256 _amount = msg.value;
        require(users[userlist[_refererId]].isExist, "incorrect referal id");
        require(_amount >= 0.1 ether, "Insufficient balance");
        currUserId += 1;
        User memory user = User({
            isExist: true,
            id: currUserId,
            entryTime: _entryTime,
            investment: _amount,
            balanceReceived: 0,
            expired: _entryTime + getExpiryDate(0.1 ether),
            referals: 0
        });

        users[msg.sender] = user;
        userlist[currUserId] = msg.sender;

        if (users[userlist[_refererId]].referals == 0) {
            address(uint256(userlist[_refererId])).transfer(
                (_amount * 10) / 100
            );
            users[userlist[_refererId]].referals += 1;
        } else if (users[userlist[_refererId]].referals == 1) {
            address(uint256(userlist[_refererId])).transfer(
                (_amount * 20) / 100
            );
            users[userlist[_refererId]].referals += 1;
        } else if (users[userlist[_refererId]].referals >= 2) {
            address(uint256(userlist[_refererId])).transfer(
                (_amount * 30) / 100
            );
            users[userlist[_refererId]].referals += 1;
        }
    }

    function getExpiryDate(uint256 _amount) public view returns (uint256) {
        if (_amount == 0.1 ether) {
            return noOfDays[1].expired;
        }
        if (_amount == 0.2 ether) {
            return noOfDays[2].expired;
        }
        if (_amount == 0.3 ether) {
            return noOfDays[3].expired;
        }
        if (_amount == 0.5 ether) {
            return noOfDays[4].expired;
        }
        if (_amount == 1 ether) {
            return noOfDays[5].expired;
        }
        if (_amount == 2 ether) {
            return noOfDays[6].expired;
        }
        if (_amount == 3 ether) {
            return noOfDays[7].expired;
        }
        if (_amount == 5 ether) {
            return noOfDays[8].expired;
        }
        if (_amount == 10 ether) {
            return noOfDays[9].expired;
        }
        if (_amount == 15 ether) {
            return noOfDays[10].expired;
        }
    }

    function getROI(uint256 _amount) public view returns (uint256) {
        if (_amount == 0.1 ether) {
            return noOfDays[1].roi;
        }
        if (_amount == 0.2 ether) {
            return noOfDays[2].roi;
        }
        if (_amount == 0.3 ether) {
            return noOfDays[3].roi;
        }
        if (_amount == 0.5 ether) {
            return noOfDays[4].roi;
        }
        if (_amount == 1 ether) {
            return noOfDays[5].roi;
        }
        if (_amount == 2 ether) {
            return noOfDays[6].roi;
        }
        if (_amount == 3 ether) {
            return noOfDays[7].roi;
        }
        if (_amount == 5 ether) {
            return noOfDays[8].roi;
        }
        if (_amount == 10 ether) {
            return noOfDays[9].roi;
        }
        if (_amount == 15 ether) {
            return noOfDays[10].roi;
        }
    }

    function sendROI() public {
        require(users[msg.sender].expired > 0, "yours investment is expired");
        users[msg.sender].balanceReceived += getROI(
            users[msg.sender].investment
        );
        users[msg.sender].expired -= 1;
    }

    function getUsersThroughList(uint256 _id) public view returns (address) {
        return userlist[_id];
    }

    function getUsersThroughAddress(address _user)
        public
        view
        returns (
            uint256 id,
            uint256 investment,
            uint256 balanceReceived,
            uint256 referals
        )
    {
        return (
            users[_user].id,
            users[_user].investment,
            users[_user].balanceReceived,
            users[_user].referals
        );
    }

    function getCurrUserId()
    public
    view
    returns (uint256) {
        return currUserId;
    }
}

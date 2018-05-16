import Transaction from './Transaction';

const getTransaction = (): Transaction => {
    return {
        id: '500',
        payeeId: '22',
        personId: '203',
        categoryId: '1',
        category: {
          id: '1',
          categoryName: 'Salary',
          categoryType: 'income'
        },
        accountId: '5',
        txType: 'Deposit',
        txDate: '2016-06-15T04:00:00.000Z',
        version: 1,
        cleared: true,
        amount: 3000,
        payee: {
        id: '22',
        payeeName: 'Yoyodyne Propulsion Systems',
        categoryId: '1',
        address: {
            street: '16 Blue Blazer Way',
            city: 'Grover\'s Mill',
            state: 'NJ',
            zip: '07561'
        },
        image: '/images/cats/3.jpg',
        motto: 'Synchronised systemic internet solution',
        version: 1,
        active: true
    }
 } as Transaction;
};

export {getTransaction};

function getTransactions():Transaction[] {
    // tslint:disable
    return [
            {
              "id": "1",
              "payeeId": "1",
              "personId": "201",
              "categoryId": "102",
              "category": {
                "id": "102",
                "categoryName": "Housing",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-06-01T04:00:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -1600,
              "payee": {
                "id": "1",
                "payeeName": "DCH Mortgages",
                "address": {
                  "street": "1285 Rezlog Plaza",
                  "city": "Powhatan",
                  "state": "RI",
                  "zip": "02212"
                },
                "categoryId": "102",
                "image": null,
                "motto": null,
                "version": 1,
                "active": true
              }
            },
            {
              "id": "2",
              "payeeId": "2",
              "personId": "201",
              "categoryId": "106",
              "category": {
                "id": "106",
                "categoryName": "Utilities",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-06-10T04:00:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -22.5,
              "payee": {
                "id": "2",
                "payeeName": "Ill Communication Telephones",
                "address": {
                  "street": "1597 Figole Grove",
                  "city": "Akron",
                  "state": "OH",
                  "zip": "66345"
                },
                "categoryId": "106",
                "image": null,
                "motto": null,
                "version": 1,
                "active": true
              }
            },
            {
              "id": "3",
              "payeeId": "3",
              "personId": "201",
              "categoryId": "106",
              "category": {
                "id": "106",
                "categoryName": "Utilities",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-06-20T04:00:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -86.25,
              "payee": {
                "id": "3",
                "payeeName": "Erol's Internet",
                "address": {
                  "street": "453 Loma Linda Junction",
                  "city": "Kansas City",
                  "state": "KS",
                  "zip": "60019"
                },
                "categoryId": "106",
                "image": null,
                "motto": null,
                "version": 1,
                "active": true
              }
            },
            {
              "id": "4",
              "payeeId": "12",
              "personId": "201",
              "categoryId": "105",
              "category": {
                "id": "105",
                "categoryName": "Medical",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-14T00:49:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -115,
              "payee": {
                "id": "12",
                "payeeName": "Bauch-Stehr Medical Partners",
                "address": {
                  "street": "671 York Ave",
                  "city": "Baltimore",
                  "state": "MD",
                  "zip": "54952"
                },
                "categoryId": "105",
                "image": "/images/business/3.jpg",
                "motto": "Versatile optimizing support",
                "version": 1,
                "active": true
              }
            },
            {
              "id": "5",
              "payeeId": "14",
              "personId": "201",
              "categoryId": "105",
              "category": {
                "id": "105",
                "categoryName": "Medical",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-09T16:06:00.000Z",
              "version": 1,
              "cleared": false,
              "amount": -86.25,
              "payee": {
                "id": "14",
                "payeeName": "Ziener & Ratke, Pediatrics",
                "address": {
                  "street": "1873 Razif Loop",
                  "city": "Fonzopo",
                  "state": "FL",
                  "zip": "55902"
                },
                "categoryId": "105",
                "image": "/images/business/2.jpg",
                "motto": "Multi-lateral grid-enabled toolset",
                "version": 1,
                "active": true
              }
            },
            {
              "id": "6",
              "payeeId": "17",
              "personId": "201",
              "categoryId": "106",
              "category": {
                "id": "106",
                "categoryName": "Utilities",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-06-25T04:00:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -9.75,
              "payee": {
                "id": "17",
                "payeeName": "Deckow-Hand",
                "address": {
                  "street": "1622 Avena Circle",
                  "city": "Nuebaheh",
                  "state": "MA",
                  "zip": "52038"
                },
                "categoryId": "106",
                "image": "/images/animals/9.jpg",
                "motto": "Cloned directional attitude",
                "version": 1,
                "active": true
              }
            },
            {
              "id": "7",
              "payeeId": "4",
              "personId": "201",
              "categoryId": "103",
              "category": {
                "id": "103",
                "categoryName": "Food",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-29T17:01:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -7.5,
              "payee": {
                "id": "4",
                "payeeName": "Acme Products, Inc",
                "address": {
                  "street": "1669 Divided Court",
                  "city": "Cheyenne",
                  "state": "WY",
                  "zip": "48324"
                },
                "categoryId": "103",
                "image": null,
                "motto": null,
                "version": 1,
                "active": true
              }
            },
            {
              "id": "8",
              "payeeId": "16",
              "personId": "201",
              "categoryId": "104",
              "category": {
                "id": "104",
                "categoryName": "Entertainment",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-07T22:46:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -6.75,
              "payee": {
                "id": "16",
                "payeeName": "Davis, Muller and Marvin",
                "address": {
                  "street": "319 Nazmo Road",
                  "city": "Sohcutzeh",
                  "state": "VT",
                  "zip": "09725"
                },
                "categoryId": "104",
                "image": "/images/technics/1.jpg",
                "motto": "Persevering regional moratorium",
                "version": 1,
                "active": true
              }
            },
            {
              "id": "9",
              "payeeId": "7",
              "personId": "201",
              "categoryId": "104",
              "category": {
                "id": "104",
                "categoryName": "Entertainment",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-06T21:42:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -34.5,
              "payee": {
                "id": "7",
                "payeeName": "Worthless Peon Productions",
                "address": {
                  "street": "125 Scrub Street",
                  "city": "Santa Monica",
                  "state": "CA",
                  "zip": "90111"
                },
                "categoryId": "104",
                "image": null,
                "motto": null,
                "version": 1,
                "active": true
              }
            },
            {
              "id": "10",
              "payeeId": "26",
              "personId": "201",
              "categoryId": "108",
              "category": {
                "id": "108",
                "categoryName": "Cash",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-29T18:38:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -60,
              "payee": {
                "id": "26",
                "payeeName": "Cash Withdrawal",
                "categoryId": "108",
                "version": 1,
                "active": true
              }
            },
            {
              "id": "11",
              "payeeId": "6",
              "personId": "201",
              "categoryId": "103",
              "category": {
                "id": "103",
                "categoryName": "Food",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-23T20:18:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -6,
              "payee": {
                "id": "6",
                "payeeName": "Sushi Land",
                "address": {
                  "street": "808 Calvert St.",
                  "city": "Baltimore",
                  "state": "MD",
                  "zip": "01848"
                },
                "categoryId": "103",
                "image": null,
                "motto": null,
                "version": 1,
                "active": true
              }
            },
            {
              "id": "12",
              "payeeId": "18",
              "personId": "201",
              "categoryId": "102",
              "category": {
                "id": "102",
                "categoryName": "Housing",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-31T21:45:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -45,
              "payee": {
                "id": "18",
                "payeeName": "Watsica Design",
                "address": {
                  "street": "289 Vaewi Avenue",
                  "city": "Dorgaec",
                  "state": "WY",
                  "zip": "19966"
                },
                "categoryId": "102",
                "image": "/images/business/5.jpg",
                "motto": "Streamlined full-range budgetary management",
                "version": 1,
                "active": true
              }
            },
            {
              "id": "13",
              "payeeId": "25",
              "personId": "201",
              "categoryId": "101",
              "category": {
                "id": "101",
                "categoryName": "Clothing",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-24T23:20:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -46,
              "payee": {
                "id": "25",
                "payeeName": "Tower Shields",
                "categoryId": "101",
                "address": {
                  "street": "289 Vaewi Avenue",
                  "city": "Dorkachek",
                  "state": "WY",
                  "zip": "19966"
                },
                "image": "/images/business/5.jpg",
                "motto": "Streamlined full-range budgetary management",
                "version": 1,
                "active": true
              }
            },
            {
              "id": "14",
              "payeeId": "15",
              "personId": "201",
              "categoryId": "103",
              "category": {
                "id": "103",
                "categoryName": "Food",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-16T23:05:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -5.25,
              "payee": {
                "id": "15",
                "payeeName": "Heathcote Inc",
                "address": {
                  "street": "798 Defarge Point",
                  "city": "Tajuwbi",
                  "state": "WI",
                  "zip": "88464"
                },
                "categoryId": "103",
                "image": "/images/business/3.jpg",
                "motto": "Secured web-enabled Graphical Clothing Interface",
                "version": 1,
                "active": true
              }
            },
            {
              "id": "15",
              "payeeId": "13",
              "personId": "201",
              "categoryId": "104",
              "category": {
                "id": "104",
                "categoryName": "Entertainment",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-31T00:02:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -3.75,
              "payee": {
                "id": "13",
                "payeeName": "The Senator Theater",
                "address": {
                  "street": "1689 North York Rd",
                  "city": "Baltimore",
                  "state": "MD",
                  "zip": "48693"
                },
                "categoryId": "104",
                "image": "/images/business/5.jpg",
                "motto": "Yesterday's movies tomorrow",
                "version": 1,
                "active": true
              }
            },
            {
              "id": "16",
              "payeeId": "19",
              "personId": "201",
              "categoryId": "107",
              "category": {
                "id": "107",
                "categoryName": "Transportation",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-29T20:35:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -28.75,
              "payee": {
                "id": "19",
                "payeeName": "Wayne Enterprises",
                "categoryId": "107",
                "address": {
                  "street": "319 Thomas Wayne Road",
                  "city": "Gotham",
                  "state": "NY",
                  "zip": "10939"
                },
                "image": "/images/technics/1.jpg",
                "motto": "Persevering regional moratorium",
                "version": 1,
                "active": true
              }
            },
            {
              "id": "17",
              "payeeId": "9",
              "personId": "201",
              "categoryId": "107",
              "category": {
                "id": "107",
                "categoryName": "Transportation",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-03T20:36:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -12,
              "payee": {
                "id": "9",
                "payeeName": "Gleichner, Lind and Olson, Ltd.",
                "categoryId": "107",
                "address": {
                  "street": "142 Wune Street",
                  "city": "Deetelu",
                  "state": "WV",
                  "zip": "80587"
                },
                "image": "/images/animals/9.jpg",
                "motto": "Optimized executive frame",
                "version": 1,
                "active": true
              }
            },
            {
              "id": "18",
              "payeeId": "5",
              "personId": "201",
              "categoryId": "103",
              "category": {
                "id": "103",
                "categoryName": "Food",
                "categoryType": "expense"
              },
              "accountId": "1",
              "txType": "Debit",
              "txDate": "2016-07-17T00:53:00.000Z",
              "version": 1,
              "cleared": true,
              "amount": -143.75,
              "payee": {
                "id": "5",
                "payeeName": "Shop-Rite Grocery Store",
                "address": {
                  "street": "311 St. Paul Ave.",
                  "city": "Baltimore",
                  "state": "MD",
                  "zip": "08697"
                },
                "categoryId": "103",
                "image": null,
                "motto": null,
                "version": 1,
                "active": true
              }
            },
    ]
};
export {getTransactions};


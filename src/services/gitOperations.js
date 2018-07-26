
const DomOperations = require('./../view/domOpeartions.js');
const $domOp = new DomOperations();
const store = require('./../reducer.js');
const actionz = require('./../actions.js');

export default class GitOperations {


    constructor(){
        this.gitResponse = '';
    }
    processFetchApiWithPost(objData) {
        debugger;
        var authorizationToken = 'token ba59dacddfee5357da2e599f2db20742ca2745cd';

        var statusCode;
        var myArray = [];
        fetch(objData.url, {
            method: objData.method,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": authorizationToken
            },
            body: JSON.stringify(objData.jsonData)
        }
        )

            .then((response) => {
                debugger;
                statusCode = response.status;
                if (response.ok) {
                    return response.json();
                } else {
                    debugger;
            //      $domOp.setResponseInWidget(objData.operation,myArray,statusCode);                                                  
                }
            })
            .then((jsonData) => {
                myArray = jsonData;
//                $domOp.setResponseInWidget(objData.operation, myArray, statusCode);
                // if(objData.operation=="createRepo"){
                //     debugger;
                //     this.gitResponse=myArray;
                //     store.dispatch(actionz.action_createRepo);
                // }
            })
            .catch((err) => {
                debugger;
                console.log("Error:", err.message);
            })
    };

    processFetchApiWithGet(objData) {
        debugger;
        var authorizationToken = 'token ba59dacddfee5357da2e599f2db20742ca2745cd';

        var statusCode;
        var myArray = [];
        fetch(objData.url, {
            method: objData.method,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": authorizationToken
            }

        }
        )

            .then((response) => {
                debugger;
                statusCode = response.status;
                if (response.ok) {
                    return response.json();
                } else {
                    debugger;
                    $domOp.setResponseInWidget(objData.operation, myArray, statusCode);
                }
            })
            .then((jsonData) => {
                myArray = jsonData;
                $domOp.setResponseInWidget(objData.operation, myArray, statusCode);
            })
            .catch((err) => {
                debugger;
                console.log("Error:", err.message);
            })
    }

}
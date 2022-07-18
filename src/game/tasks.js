export const gradingEngineBaseUrl = "https://gradingengineassignmentfunctionapp.azurewebsites.net/api/AzureGraderFunction";
export const dialogs = {
    "npc_01": [{
        "message": "Hello",
    }, {
        "message": "How are you?",
    }],
    "npc_02": [{
        "message": "Hello there",
    }],
    "npc_03": [{
        "message": "Hi",
    }],
    "npc_04": [{
        "message": "Hey",
    }],
    "sword": [{
        "message": "You got a sword",
    }],
    "push": [{
        "message": "You can push boxes now",
    }],
    "sign_01": [{
        "message": "You can read this!",
    }],
    "book_01": [{
        "message": "Welcome to the game, and now I help you getting back your earned coins, but it takes sometimes!",
    }]
};

export const tasks = [{
        "gameClassOrder": 1,
        "name": "AzureProjectTest.ResourceGroupTest.Test01_ResourceGroupExist AzureProjectTest.ResourceGroupTest.Test02_ResourceGroupLocation",
        "tests": [
            "AzureProjectTest.ResourceGroupTest.Test01_ResourceGroupExist",
            "AzureProjectTest.ResourceGroupTest.Test02_ResourceGroupLocation"
        ],
        "instruction": "Can you help create a resource group named 'projProd' in Hong Kong?",
        "filter": "test==\"AzureProjectTest.ResourceGroupTest.Test01_ResourceGroupExist\"||test==\"AzureProjectTest.ResourceGroupTest.Test02_ResourceGroupLocation\"",
        "timeLimit": 2,
        "reward": 10
    },
    {
        "gameClassOrder": 2,
        "name": "AzureProjectTest.StorageAccountTest.Test01_StorageAccountsWithTag",
        "tests": [
            "AzureProjectTest.StorageAccountTest.Test01_StorageAccountsWithTag"
        ],
        "instruction": "Can you help create a Storage account in resource group 'projProd' and add tag name 'usage' and value 'logic'?",
        "filter": "test=AzureProjectTest.StorageAccountTest.Test01_StorageAccountsWithTag",
        "timeLimit": 2,
        "reward": 10
    },
    {
        "gameClassOrder": 2,
        "name": "AzureProjectTest.StorageAccountTest.Test02_StorageAccountsWithTag",
        "tests": [
            "AzureProjectTest.StorageAccountTest.Test02_StorageAccountsWithTag"
        ],
        "instruction": "Can you help create a Storage account in resource group 'projProd' and add tag name 'usage' and value 'StaticWeb'?",
        "filter": "test=AzureProjectTest.StorageAccountTest.Test02_StorageAccountsWithTag",
        "timeLimit": 2,
        "reward": 10
    },
    {
        "gameClassOrder": 2,
        "name": "AzureProjectTest.StorageAccountTest.Test03_StorageAccountSettings",
        "tests": [
            "AzureProjectTest.StorageAccountTest.Test03_StorageAccountSettings"
        ],
        "instruction": "Can you help change your Storage account tagged 'usage' with 'logic' to southeastasia, AccessTier to Hot, StorageV2, Standard_LRS and allow public access?",
        "filter": "test=AzureProjectTest.StorageAccountTest.Test03_StorageAccountSettings",
        "timeLimit": 2,
        "reward": 20
    },
    {
        "gameClassOrder": 2,
        "name": "AzureProjectTest.StorageAccountTest.Test04_WebStorageAccountSettings",
        "tests": [
            "AzureProjectTest.StorageAccountTest.Test04_WebStorageAccountSettings"
        ],
        "instruction": "Can you help change your Storage account tagged 'usage' with 'StaticWeb' to eastasia, AccessTier to Hot, StorageV2, Standard_LRS and allow public access?I need the index page of text 'This is index page.' and the error page of text 'This is error page.'.",
        "filter": "test=AzureProjectTest.StorageAccountTest.Test04_WebStorageAccountSettings",
        "timeLimit": 2,
        "reward": 30
    },
    {
        "gameClassOrder": 2,
        "name": "AzureProjectTest.StorageAccountTest.Test05_StorageAccountCodeContainer",
        "tests": [
            "AzureProjectTest.StorageAccountTest.Test05_StorageAccountCodeContainer"
        ],
        "instruction": "I need a Blog container named 'code' in Storage account tagged 'usage' with 'logic'. Can you help?",
        "filter": "test=AzureProjectTest.StorageAccountTest.Test05_StorageAccountCodeContainer",
        "timeLimit": 2,
        "reward": 10
    },
    {
        "gameClassOrder": 2,
        "name": "AzureProjectTest.StorageAccountTest.Test06_StorageAccountMessageTable",
        "tests": [
            "AzureProjectTest.StorageAccountTest.Test06_StorageAccountMessageTable"
        ],
        "instruction": "I need a Azure table named 'message' in Storage account tagged 'usage' with 'logic'. Can you help?",
        "filter": "test=AzureProjectTest.StorageAccountTest.Test06_StorageAccountMessageTable",
        "timeLimit": 2,
        "reward": 10
    },
    {
        "gameClassOrder": 2,
        "name": "AzureProjectTest.StorageAccountTest.Test07_StorageAccountJobQueue",
        "tests": [
            "AzureProjectTest.StorageAccountTest.Test07_StorageAccountJobQueue"
        ],
        "instruction": "I need a Azure Storage Queue named 'job' in Storage account tagged 'usage' with 'logic'. Can you help?",
        "filter": "test=AzureProjectTest.StorageAccountTest.Test07_StorageAccountJobQueue",
        "timeLimit": 2,
        "reward": 10
    },
    {
        "gameClassOrder": 3,
        "name": "AzureProjectTest.VnetTests.Test01_Have2VnetsIn2Regions AzureProjectTest.VnetTests.Test02_VnetAddressSpace",
        "tests": [
            "AzureProjectTest.VnetTests.Test01_Have2VnetsIn2Regions",
            "AzureProjectTest.VnetTests.Test02_VnetAddressSpace"
        ],
        "instruction": "Can you help create 2 vnet? First vnet named 'projVnet1Prod' in 'southeastasia' of CIDR '10.0.0.0/16' and Second vnet named 'projVnet2Prod' in 'southeastasia' of CIDR '10.1.0.0/16'.",
        "filter": "test==\"AzureProjectTest.VnetTests.Test01_Have2VnetsIn2Regions\"||test==\"AzureProjectTest.VnetTests.Test02_VnetAddressSpace\"",
        "timeLimit": 2,
        "reward": 10
    }
];

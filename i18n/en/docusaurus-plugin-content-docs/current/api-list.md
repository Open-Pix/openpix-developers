---
id: api-list
title: API List
---

Most OpenPix modules supports APIs. APIs can be used individually or leveraging data from other APIs.

### Platform APIs:

### User
| Module   | API                                  | Description | 
|----------|--------------------------------------|-------------|
| Common      | [User GET](api/user/api-user-get-id)          | This API retrieve User data.          |
| Common      | [Users GET](api/user/api-user-get)          | This API retrieve Users data.          |
| Common      | [User POST](api/user/api-user-update-or-create) | This API can Update or Create Users. **This is the most used API and is recommended that you check this one first.**  |
| Common      | [User DELETE](api/user/api-user-delete)          | This API delete User data.          |

### Area
| Module   | API                                  | Description | 
|----------|--------------------------------------|-------------|
| Planning | [Area GET](api/area/api-area-get-id)          | This API query and retrieve Area.     |
| Planning | [Areas GET](api/area/api-area-get)          | This API query and retrieve Areas.     |
| Planning | [Area POST](api/area/api-area-update-or-create) | This API can Update or Create Areas.   |
| Planning | [Area POST](api/area/api-area-user-add) | This API can Update Areas adding user to them.   |
| Planning | [Area POST](api/area/api-area-user-remove) | This API can Update Areas removing user from them.   |
| Planning | [Area DELETE](api/area/api-area-delete)          | This API deletes Area.     |

### Business Division
| Module   | API                                  | Description | 
|----------|--------------------------------------|-------------|
| Planning | [Business Division GET](api/business-division/api-business-division-get-id)          | This API query and retrieve Business Division.     |
| Planning | [Business Divisions GET](api/business-division/api-business-division-get)          | This API query and retrieve Business Divisions.     |
| Planning | [Business Division POST](api/business-division/api-business-division-update-or-create) | This API can Update or Create Business Divisions.   |
| Planning | [Business Division POST](api/business-division/api-business-division-user-add) | This API can Update Business Divisions adding user to them.   |
| Planning | [Business Division POST](api/business-division/api-business-division-user-remove) | This API can Update Business Divisions removing from them.   |
| Planning | [Business Division DELETE](api/business-division/api-business-division-delete) | This API can Delete Business Division.   |
# GApp-Education-OAuth-Project

OAuth (Open Authorization) is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords. The OAuth 2.0 is the framework that enables the protocol to log in to the third-party application. This mechanism is used by companies such as Amazon, Google, Facebook, Microsoft, and Twitter to permit the users to share information about their accounts with third-party applications or websites. It is the only authentication protocol that gives access to third-party applications in major ways. Google endorses OAuth2 for all their API's and Facebook's Graph API assist OAuth2. It gives access to the application on its own behalf allowing HTTP service. OAuth2 starts with Basic Auth. 
OAuth introduces an authorization layer and separates the role of the client from that of the resource owner. In OAuth, the client requests access to resources controlled by the resource owner and hosted by the resource server and is issued a different set of credentials than those of the resource owner. Instead of using the resource owner's credentials to access protected resources, the client obtains an access token--a string denoting a specific scope, lifetime, and other access attributes. Access tokens are issued to third-party clients by an authorization server with the approval of the resource owner. Then the client uses the access token to access the protected resources hosted by the resource server.
Auth0 generates access tokens for API authorization scenarios, in JSON web token (JWT) format. The permissions represented by the access token, in OAuth terms, are known as scopes. When an application authenticates with Auth0, it specifies the scopes it wants. If those scopes are authorized by the user, then the access token will represent these authorized scopes.


## Roles in OAuth Framework

Resource Owner
An entity capable of granting access to a protected resource. When the resource owner is a person, it is referred to as an end-user.

Resource Server 
The server hosting the protected resources, capable of accepting and responding to protected resource requests using access tokens. 

Client
An application making protected resource requests on behalf of the resource owner and with its authorization. The term "client" does not imply any particular implementation characteristics (e.g., whether the application executes on a server, a desktop, or other devices).


Authorization Server 
The server issuing access tokens to the client after successfully authenticating the resource owner and obtaining authorization.


##	Protocol Endpoints in OAuth 

Authorization endpoint 
Used by the client to obtain authorization from the resource owner via user-agent redirection. 

Token endpoint 
Used by the client to exchange an authorization grant for an access token, typically with client authentication. 

Redirection endpoint 
Used by the authorization server to return responses containing authorization credentials to the client via the resource owner user-agent.

## Use Case Functionalities Use in Web Application

This are the main functionalities which we use OAuth in our web app.



<img width="550" hight="600" alt=" " src="/resources/Picture0.jpg">

## METHODOLOGY
The first web authentication scheme is the Basic Auth Type also called 'Basic Authentication'. It 
allows web servers to ask the credentials and get the token to access the browser in a way than 
can browser understands. If the requested API call or server returns an HTTP response code of 
401. It means that the application is required authentication. So, the application side adds a 
special header to the response API. It commonly named WWW-Authenticate. When the browser 
received the above response code and this header, the application shows a popup in-build or 
common log-in dialog box.
The best thing about the Basic Auth is its intelligibility. Developers do not have to develop a login screen. The browser handles all of that and the API call sends just username and password to 
the server. It also gives the chance to the user handle the password in an especially thorough 
browser whether by remembering it for the user, accessing it from a third-party plugin, or 
accessing the user’s credentials from their browser history. 
It shows the log-in option to enter the username and password which wants to get access and if 
do. not any control over the look and feel of the log-in screen on the downside. If the user forgot 
the password, it keeps adding a new account for access to the third-party application. 
OAuth2 behaves and keeps access details as a secret. It is a set of details that only a particular 
user can have and proves that you are you. That securest access detail is just more than a 
username and password.

This are the main functionalities which we use OAuth in our web app.
- Integrating Google Sign-In into Web App / Google Sign-In
- Getting The Token from The Refresh Token
- List Drive Files
- Upload A File to Google Drive
- Delete Drive Files
- Export a selected file
- Create a Comment on a File
- Get Comments on a File
- Get All the Contacts / List Contacts



## OAUTH SEQUENCE FLOW DIAGRAMS

<img width="550" hight="600" alt=" " src="/resources/Picture2.png">
<img width="550" hight="600" alt=" " src="/resources/Picture3.png">
<img width="550" hight="600" alt=" " src="/resources/Picture4.png">
<img width="550" hight="600" alt=" " src="/resources/Picture5.png">
<img width="550" hight="600" alt=" " src="/resources/Picture6.png">
<img width="550" hight="600" alt=" " src="/resources/Picture7.png">
<img width="550" hight="600" alt=" " src="/resources/Picture8.png">
<img width="550" hight="600" alt=" " src="/resources/Picture9.png">
<img width="550" hight="600" alt=" " src="/resources/Picture10.png">
<img width="550" hight="600" alt=" " src="/resources/Picture11.png">
<img width="550" hight="600" alt=" " src="/resources/Picture12.png">
<img width="550" hight="600" alt=" " src="/resources/Picture13.png">
## App Screenshots

<img width="550" hight="600" alt=" " src="/resources/Picture14.png">
<img width="550" hight="600" alt=" " src="/resources/Picture15.png">
<img width="550" hight="600" alt=" " src="/resources/Picture16.png">
<img width="550" hight="600" alt=" " src="/resources/Picture17.png">
<img width="550" hight="600" alt=" " src="/resources/Picture18.png">
<img width="550" hight="600" alt=" " src="/resources/Picture19.png">
<img width="550" hight="600" alt=" " src="/resources/Picture20.png">
<img width="550" hight="600" alt=" " src="/resources/Picture21.png">

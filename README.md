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




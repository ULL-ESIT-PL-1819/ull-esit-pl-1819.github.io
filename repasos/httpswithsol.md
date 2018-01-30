
* ¿Cuales son las dos funcionalidades principales proveídas por la capa SSL?
  - Verifying that you are talking directly to the server that you think you are talking to
  - Ensuring that only the server can read what you send it and only you can read what it sends back
* ¿Es posible que alguien intercepte un mensaje utilizando HTTPS?
  - The really, really clever part is that **anyone can intercept every single one of the messages you exchange with a server, including the ones where you are agreeing on the key and encryption strategy to use, and still not be able to read any of the actual data you send.**
* ¿Cuales son los tres objetivos de la fase de *handshake* entre un cliente y un servidor utilizando TLS?
  - To satisfy the client that it is talking to the right server (and optionally visa versa)
  - For the parties to have agreed on a *[cipher suite](https://en.wikipedia.org/wiki/Cipher_suite)*, which includes which encryption algorithm they will use to exchange data
  - For the parties to have agreed on any necessary keys for this algorithm
* ¿Como se llaman las tres fases en las que se puede descomponer la etapa de [handshake](http://www.dictionary.com/browse/handshake)?
  - Hello, Certificate Exchange and Key Exchange*
* Describa la primera fase del  *handshake*
  - The [handshake](http://www.dictionary.com/browse/handshake) begins with the client sending a `ClientHello` message. 
  - This contains all the information the server needs in order to connect to the client via SSL, including 
    - the various cipher suites 
    - and maximum SSL version that it supports. 
  - The server responds with a `ServerHello`, which contains similar information required by the client, including 
    - a decision based on the client’s preferences about which cipher suite and version of SSL will be used.
* Describa la segunda fase del  *handshake*
  - Now that contact has been established, the server has to prove its identity to the client. 
  - This is achieved using its SSL certificate, which is a very tiny bit like its passport. 
  - An SSL certificate contains various pieces of data, including the 
     - name of the owner,
     - the property (eg. domain) it is attached to, 
     - the certificate’s public key, 
     - the [digital signature](https://en.wikipedia.org/wiki/Digital_signature) and 
     - information about the certificate’s validity dates. 
  - The client checks that it either 
    - implicitly trusts the certificate, 
    - or that it is verified and trusted by one of several Certificate Authorities (CAs) that it also implicitly trusts. 
  - Note that the server is also allowed to require a certificate to prove the client’s identity, but this typically only happens in very sensitive applications.
* Describa la tercera fase del  *handshake*
  - The encryption of the actual message data exchanged by the client and server will be done using a symmetric algorithm, the exact nature of which was already agreed during the **Hello phase**. 
  - A **symmetric algorithm** uses a single key for both encryption and decryption, in contrast to asymmetric algorithms that require a public/private key pair. 
  - Both parties need to agree on this single, symmetric key, a process that is accomplished securely using asymmetric encryption and the server’s public/private keys.
  - The client generates a random key to be used for the main, symmetric algorithm. 
    - It encrypts it using an algorithm also agreed upon during the Hello phase, and the server’s public key (found on its SSL certificate). 
    - It sends this encrypted key to the server, where it is decrypted using the server’s private key, and the interesting parts of the [handshake](http://www.dictionary.com/browse/handshake) are complete. 
* ¿Que tipo de cifrado se utiliza una vez que a finalizado con éxito la fase de handshake?
  - The parties are sufficiently happy that they are talking to the right person, and have secretly agreed on a key to symmetrically encrypt the data that they are about to send each other. 
* ¿Cuales son las dos razones por las que podríamos confiar en un certificado SSL?
  * There are 2 sensible reasons why you might trust a certificate:
    * If it’s on a list of certificates that you trust implicitly
    * If it’s able to prove that it is trusted by the controller of one of the certificates on the above list
      * The first criteria is easy to check. Your browser has a pre-installed list of trusted SSL certificates from Certificate Authorities (CAs) that you can view, add and remove from. 
      * These certificates are controlled by a centralised group of (in theory, and generally in practice) extremely secure, reliable and trustworthy organisations like 
        - [Let's Encrypt](https://letsencrypt.org/) (Let’s Encrypt is a free, automated, and open Certificate Authority),
        - [CAcert.org es una autoridad certificadora dirigida por la comunidad que emite certificados gratuitos al público](http://www.cacert.org/)
        - Symantec, 
        - Comodo and 
        - GoDaddy. 
* Describa como funciona una firma digital
  * As already noted, SSL certificates have an associated public/private key pair
    *  The public key is distributed as part of the certificate, and the private key is kept incredibly safely guarded
    *  This pair of asymmetric keys is used in the SSL [handshake](http://www.dictionary.com/browse/handshake) to exchange a further key for both parties to symmetrically encrypt and decrypt data
    *  **The client uses the server’s public key to encrypt the symmetric key and send it securely to the server, and the server uses its private key to decrypt it**
      - ![digital signature](https://raviranjankr.files.wordpress.com/2012/08/asymmetric-encryption.gif)
    *  Anyone can encrypt using the public key, but only the server can decrypt using the private key
  * The opposite is true for a digital signature. 
    - A certificate can be *"signed"* by another authority, [whereby](https://www.google.es/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=define%20whereby) the authority effectively goes on record as saying
    
     *"We have verified that the controller of this certificate also controls the property (domain) listed on the certificate"*. 
    - In this case the authority uses their private key to (broadly speaking) encrypt the contents of the certificate, and this cipher text is attached to the certificate as its digital signature. 
    - Anyone can decrypt this signature using the authority’s public key, and verify that it results in the expected decrypted value. 
    - But only the authority can encrypt content using the private key, and so only the authority can actually create a valid signature in the first place.
  * So if a server comes along claiming to have a certificate for Microsoft.com that is signed by Symantec (or some other CA), your browser doesn’t have to take its word for it. 
    - If it is legit, Symantec will have used their (ultra-secret) private key to generate the server’s SSL certificate’s digital signature, and so your browser use can use their (ultra-public) public key to check that this signature is valid. 
    - Symantec will have taken steps to ensure the organisation they are signing for really does own Microsoft.com, and so given that your client trusts Symantec, it can be sure that it really is talking to Microsoft Inc.
    ![digital signature](http://www.hill2dot0.com/wiki/images/f/ff/Digital_Signature.jpg)
* Pueden en un coffee shop conocer los contenidos de mi tráfico HTTPS desde mi portátil sobre su red?
  * Nope. 
    - The magic of public-key cryptography means that an attacker can watch every single byte of data exchanged between your client and the server and still have no idea what you are saying to each other beyond roughly how much data you are exchanging. 
    - However, your normal HTTP traffic is still very vulnerable on an insecure wi-fi network, and a flimsy website can fall victim to any number of workarounds that somehow trick you into sending HTTPS traffic either over plain HTTP or just to the wrong place completely. 
    - For example, even if a login form submits a username/password combo over HTTPS, if the form itself is loaded insecurely over HTTP then an attacker could intercept the form’s HTML on its way to your machine and modify it to send the login details to their own endpoint.
* Puede mi empresa conocer los contenidos de mi tráfico HTTPS sobre la red cuando uso la máquina que me proveen?
  * If you are also using a machine controlled by your company, then yes. 
    - Remember that at the root of every chain of trust lies an implicitly trusted CA, and that a list of these authorities is stored in your browser. 
    - Your company could use their access to your machine to **add their own self-signed certificate to this list of CAs**. 
    - They could then intercept all of your HTTPS requests, presenting certificates claiming to represent the appropriate website, signed by their fake-CA and therefore unquestioningly trusted by your browser. 
    - Since you would be encrypting all of your HTTPS requests using their dodgy certificate’s public key, they could use the corresponding private key to decrypt and inspect (even modify) your request, and then send it onto it’s intended location. 
    - They probably don’t. But they could.
  * Incidentally, this is also how you use a proxy to inspect and modify the otherwise inaccessible [HTTPS requests made by an iPhone app](http://nickfishman.com/post/50557873036/reverse-engineering-native-apps-by-intercepting-network).


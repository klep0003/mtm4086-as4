site: http://assignment4-tkle33.rhcloud.com/
controller: http://assignment4-tkle33.rhcloud.com/2btn-controller.html

NOTES:

We used an HTML5 slide framework called deck.js and changed it around to meet our needs. The actual slide presentation works pretty well, but we ran into issues in regards to our node modules.

We originally planned to have the presentation controllable on multiple screens and a mobile screen so you could navigation through the slides and activate plug-ins such as playing videos and such from a mobile screen.
 
However, socket.io stopped working as soon as we got the application working on Openshift and thus currently you cannot view the same presentation instance on multiple browser screens or control the presentation via a mobile screen. We tried retracing our steps, but nothing would work.

In addition, the key generator doesn't work, but it does look pretty nice.



BUGS:

- Key Generator doesn't work at all.
- Application cannot find the Socket.io.js file for the client side. Therefore, our mobile buttons do not work.
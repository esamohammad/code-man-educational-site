import React from "react";

const Faq = () => {
  return (
    <div className="w-2/3 mx-auto">
      {/* 1 */}
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-lime-500">
            1. What is cors?
          </div>
          <div className="collapse-content bg-yellow-300 opacity-95 font-semibold text-justify">
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-lime-500">
            2. Why are you using firebase? What other options do you have to
            implement authentication?
          </div>
          <div className="collapse-content bg-yellow-300 opacity-95 font-semibold text-justify">
            <p>
              The Firebase Realtime Database lets you build rich, collaborative
              applications by allowing secure access to the database directly
              from client-side code. Data is persisted locally, and even while
              offline, realtime events continue to fire, giving the end user a
              responsive experience.
              <br /> <br />
              Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
              alternatives and competitors to Firebase Authentication.
              <br /> <br />
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through cards,
              retina scans, voice recognition, and fingerprints.
            </p>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-lime-500">
            3. What is cors?
          </div>
          <div className="collapse-content bg-yellow-300 opacity-95 font-semibold text-justify">
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-lime-500">
            4. How does the private route work?
          </div>
          <div className="collapse-content bg-yellow-300 opacity-95 font-semibold text-justify">
            <p>
              The The private route component is similar to the public route,
              the only change is that redirect URL and authenticate condition.
              If the user is not authenticated he will be redirected to the
              login page and the user can only access the authenticated routes
              If he is authenticated (Logged in).
            </p>
          </div>
        </div>
      </div>

      {/* 5  */}
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-lime-500">
            5. What is React ?
          </div>
          <div className="collapse-content bg-yellow-300 opacity-95 font-semibold text-justify">
            <p>
              React is a JavaScript library created by Facebook. It is a User
              Interface (UI) library. It is a tool for building UI components.
            </p>
          </div>
        </div>
      </div>

      {/* 6  */}
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-lime-500">
            6. What is GitHub? ?
          </div>
          <div className="collapse-content bg-yellow-300 opacity-95 font-semibold text-justify">
            <p>
              GitHub is a code hosting platform for collaboration and version
              control. GitHub lets you (and others) work together on projects.
            </p>
          </div>
        </div>
      </div>

      {/* 7  */}
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-lime-500">
            7. What is AJAX? ?
          </div>
          <div className="collapse-content bg-yellow-300 opacity-95 font-semibold text-justify">
            <p>
              Read data from a web server - after a web page has loaded
              <br /> Update a web page without reloading the page
              <br /> Send data to a web server - in the background
            </p>
          </div>
        </div>
      </div>

      {/* 8  */}
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-lime-500">
            8. What is JSON?
          </div>
          <div className="collapse-content bg-yellow-300 opacity-95 font-semibold text-justify">
            <p>
              JSON stands for JavaScript Object Notation. It is a lightweight
              format for storing and transporting data. It is often used when
              data is sent from a server to a web page. It is "self-describing"
              and easy to understand.
            </p>
          </div>
        </div>
      </div>

      {/* 9  */}
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-lime-500">
            9. What is SQL?
          </div>
          <div className="collapse-content bg-yellow-300 opacity-95 font-semibold text-justify">
            <p>
              SQL stands for Structured Query Language. It is a standard
              language for accessing databases. It has been an international
              standard (ISO) since 1987.
            </p>
          </div>
        </div>
      </div>

      {/* 10  */}
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-lime-500">
            10. What is Full Stack?
          </div>
          <div className="collapse-content bg-yellow-300 opacity-95 font-semibold text-justify">
            <p>
              A full stack web developer is a person who can develop both client
              and server software.
              <br />
              In addition to mastering HTML and CSS, he/she also knows how to:
              <br /> <br />
              Program a browser (like using JavaScript, jQuery, Angular, or
              Vue).
              <br />
              Program a server (like using PHP, ASP, Python, or Node).
              <br />
              Program a database (like using SQL, SQLite, or MongoDB).
            </p>
          </div>
        </div>
      </div>

      {/* 11  */}
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-lime-500">
            11. What is Full Stack JavaScript Developer ?
          </div>
          <div className="collapse-content bg-yellow-300 opacity-95 font-semibold text-justify">
            <p>
              A full stack JavaScript developer is a person who can develop both
              client and server software.
              <br />
              In addition to mastering HTML and CSS, he/she also knows how to:
              <br /> <br />
              Program a browser (like using JavaScript, jQuery, Angular, or Vue)
              <br />
              Program a server (like using Node.js)
              <br />
              Program a database (like using MongoDB)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

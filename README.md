<h1>FreeCodeCamp API Basejump: Timestamp Microservice</h1>
<h3>User stories:</h3>
<ol>
  <li>I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)</li>
  <li>If it does, it returns both the Unix timestamp and the natural language form of that date.</li>
  <li>If it does not contain a date or Unix timestamp, it returns null for those properties.</li>
</ol>
<h3>Example usage:</h3>
<code>https://timestamp-ms-0.glitch.me/December%2015,%202015</code>
<br>
<code>https://timestamp-ms-0.glitch.me/1450137600</code>
<h3>Example output:</h3>
<code>{ "unix": 1450137600, "natural": "December 15, 2015" }</code>

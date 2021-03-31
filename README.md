# Color Maker

This project is a demo that shows a few different ways to use Launch Darkly feature flags.

## The App

The application is a color palette maker that generates a ramp of colors between defined "left" and "right" values.

As a user, you can change the size of the ramp, the left value, and the right value. When changing each of these, the palette will regenerate to display a gradual ramp of values in between the two end colors, with a number of steps determined by the size

## Simulated Login

Because this app is 100% built in React, it does not have a true authentication mechanism. However, I implemented a basic simulated version for testing purposes - specifically this allows you to test with different users that may belong to different segments.

To use the simulated login system, just enter a username in the text field in the header, then click "Log in." This writes the user data to browser storage, including a key (MD5 sum of the user name for consistency), to be used from the Launch Darkly dashboard for segmenting and testing.

Implementation details can be found [here](https://github.com/pbzona/color-maker/blob/main/src/components/Header.js#L13).

## The Features and Flags

ColorMaker implemented a couple of feature flags during development:

- `login_enabled`
- `colormaker_control_panel`

These flags were used to mask features that were in active development to prevent breaking changes from affecting user experience until they were ready. Even though these are trivial examples, I tried to loosely mimic a workflow that would keep the `main` branch working even though it contained code for features that were not ready yet.

These flags could be safely archived, but I've left them in place for illustrative purposes.

I also have a simulated "Pro" set of features to illustrate subscription segments. 

The `color_limit` flag uses a number value to set a maximum number of colors that can be used in a ramp. Pro users (members of the `pro` segment) and administrators (members of the `admins` segment) can create ramps of up to 10 colors, while "basic" users can only have 6 colors. Code implementation can be found [here](https://github.com/pbzona/color-maker/blob/main/src/components/Controls.js#L39).

The `multiple_ramps` flag uses a boolean value to determine whether or not a user may create additional color ramps. This flag controls whether the "add" button is clickable as well as its message - basic users will see that it is a beta feature only available to pro users. Code implementation can be found [here](https://github.com/pbzona/color-maker/blob/main/src/components/ColorMakerList.js#L26-27).

Once I had a few features added, my imaginary marketing team suggested a total branding overhaul!!! We wanted to change the brand color from black to red, but didn't want to startle all of our users at once. The `red_header_background` flag allowed me to roll out the change incrementally, starting with 25% of users. Implementation is [here](https://github.com/pbzona/color-maker/blob/main/src/components/Header.js#L39).

## Demo

A live demo is hosted at: [https://colormakerdemo.netlify.app/](https://colormakerdemo.netlify.app/)

For testing, below is a list of some users that correspond with controlled segments:

**Admins**
`phil`

**Pro**
`first_customer`
`poweruser`

**Basic**
`joe`
`violet`

There is also a user `new_customer_4` who gets the red header background variation. You can create a new user by entering a new username into the text field and clicking "Log in." Usernames are case and whitespace sensitive. 

To create a user who is a member of one of those segments, create a new user whose name starts with `admin` or `pro`.


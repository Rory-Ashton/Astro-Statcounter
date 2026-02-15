# @statcounter/astro

The official [Statcounter](https://statcounter.com/) integration for Astro.

## Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Install Verification](#install-verification)
- [Cookie Consent](#cookie-consent)
- [Support](#support)
- [Props](#props)

## Features

* **Astro View Transitions Ready**: Fully compatible with Astro's View Transitions API.
* **Automatic Page Tracking**: Works with both static and SPA sites.
* **Lightweight**: Zero-dependency component with minimal impact on bundle size.
* **Invisible**: Hardcoded to be hidden, ensuring your UI remains clean.
* **Easy Setup**: Simple component-based installation.
* **Cookie Consent Support** Integrates with CookieBot, CookieYes, Astro Cookieconsent

## Installation

Stop your server then install statcounter with this:

```bash
npm install @statcounter/astro
```

## Usage

### 1. Update your Layout
Open your primary layout file (usually `src/layouts/Layout.astro`).

Import the component in the frontmatter script (the area between the `---` lines):

```tsx
---
import { Statcounter } from '@statcounter/astro';
---
```

### 2. Add the Component to Layout

Place the ```<Statcounter />``` component inside your layout just before the closing ```</body>``` tag.  

Replace the default values with your own statcounter project ID and security code.  You can get these from the Statcounter website by clicking your project name, clicking the gear icon in the lower left corner, click Settings, and scrolling down to the bottom.

```tsx
<Statcounter sc_project={1234567} sc_security="abcdef12" sc_manageConsent={true} sc_CMP="cookieyes" />
```

If you are not using a Cookie Consent program you can use this shorter version

```tsx
<Statcounter sc_project={1234567} sc_security="abcdef12" />
```

### Full Code Example

**example `src/layouts/Layout.astro`**

```tsx
---
import Statcounter from '@statcounter/astro';
// ... other imports
---

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Astro Project</title>
</head>
<body>
<slot />
<Statcounter sc_project={1234567} sc_security="abcdef12" sc_manageConsent={true} sc_CMP="cookieyes" />
</body>
</html>
```

### 3. Rebuild the site and restart the app

## Install Verification

After you rebuild the site and restart the server, go to your site and open the browser console > Network tab and reload the page. You should see this activity in the Network tab. 

```counter.js

https://c.statcounter.com/t.php?sc_project=111111[...]
```

If you are using View Transitions navigate to a few different pages to be sure the tracker fires on each route change.

You should also see the statcounter code in the page -> view source.

Note: If you do not see any network activity ensure your browser Adblocker is disabled as they often block analytics scripts.  You might need to do a hard refresh of the page or try adding a ?cache-buster=true string to the URL.

## Cookie Consent

You can toggle on Cookie Consent mode with this 

```tsx
sc_manageConsent={true}
```

And enter the Consent Program name here

```tsx
sc_CMP="cookieyes"
```
Supported values are : 

* ```vanillajop```
* ```cookieyes```
* ```cookiebot```

```tsx
<Statcounter sc_project={1234567} sc_security="abcdef12" sc_manageConsent={true} sc_CMP="vanillajop" />
```

Note : *vanillajop* supports 

*jop-software/astro-cookieconsent* 

and 

*vanilla-cookieconsent*

## Support

If you have any questions please email us at ![Email](https://img.shields.io/badge/support_[at]_statcounter_[dot]_com-0078d3) or use our contact form here https://statcounter.com/support/contact/

## Props

| Prop | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `sc_project` | `number` | **Yes** | Your Statcounter Project ID number. |
| `sc_security` | `string` | **Yes** | Your Statcounter Security Code string. |
| `sc_manageConsent` | `boolean` | **No** | Enables CMP integration (default: false). |
| `sc_CMP` | `string` | **No** | cookieyes, cookiebot, or vanillajop. |
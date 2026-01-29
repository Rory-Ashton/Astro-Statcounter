# @statcounter/astro

The official [Statcounter](https://statcounter.com/) integration for Astro.

## Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Verification](#verification)
- [Support](#support)
- [Props](#props)

## Features

* **Astro View Transitions Ready**: Fully compatible with Astro's View Transitions API.
* **Automatic Page Tracking**: Works with both static and SPA View Transitions-enabled sites.
* **Lightweight**: Zero-dependency component with minimal impact on bundle size.
* **Invisible**: Hardcoded to be hidden, ensuring your UI remains clean.
* **Easy Setup**: Simple component-based installation.

## Installation

Stop your server then install statcounter with this:

```bash
npm install @statcounter/astro
```

## Usage

### 1. Update your Layout
Open your primary layout file (usually `src/layouts/Layout.astro`).

Import the component in the frontmatter script (the area between the `---` lines):

```astro
---
import { Statcounter } from '@statcounter/astro';
---
```

### 2. Add the Component to Layout

Place the ```<Statcounter />``` component inside your layout just before the closing ```</body>``` tag.  Replace the default values with your own statcounter project ID and security code.  You can get these from the Statcounter website by clicking your project name, clicking the gear icon in the lower left corner, click Settings, and scrolling down to the bottom.

```astro
<Statcounter sc_project={1234567} sc_security="abcdef12" />
```

### Full Code Example

**Example placement in `src/layouts/Layout.astro`**

```html
---
import { Statcounter } from '@statcounter/astro';
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
        
        <Statcounter sc_project={1234567} sc_security="abcdef12" />
	</body>
</html>
```

### 3. Rebuild the site and restart the app
If you are developing locally, stop your server and run:

```bash
npm run dev
```

If you are deploying to production, you must rebuild to see changes:

```bash
npm run build
```

### Install Verification

After you rebuild the site and restart the server, go to your site and open the browser console > Network tab and reload the page. You should see this activity in the Network tab.

```counter.js

https://c.statcounter.com/t.php?sc_project=111111[...]
```

If you are using View Transitions navigate to a few different pages to be sure the tracker fires on each route change.

Note: If you do not see any network activity ensure your browser Adblocker is disabled as they often block analytics scripts.  You might need to do a hard refresh of the page or try adding a ?cache-buster=true string to the URL.

## Support

If you have any questions please email us at ![Email](https://img.shields.io/badge/support_[at]_statcounter_[dot]_com-0078d3) or use our contact form here https://statcounter.com/support/contact/

## Props

| Prop | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `sc_project` | `number` | **Yes** | Your Statcounter Project ID number. |
| `sc_security` | `string` | **Yes** | Your Statcounter Security Code string. |
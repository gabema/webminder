# 3. Package as static Progressive Web App

Date: 2025-10-22

## Status

Accepted

## Context

The app needs to be delivered to users devices
so they can play it.

## Decision

We will deploy the application as a static progressive web app.

## Consequences

What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.
Makes easier
1. Easily accessible by a wide array of devices.
1. Does not require deployment to app stores.
1. Only requires a modern browser.

Makes more difficult
1. Making available offline will require additional effort.
1. Requires supporting large number of screen sizes and a select set of modern browsers and javascript/web assembly runtimes.

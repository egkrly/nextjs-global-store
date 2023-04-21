# Next.js global store with socket handling example

This is an example repository, a possible solution for a common problem in Next.js.
The problem is, we have a redux-saga store for each Next.js page.
When navigating through the pages, their stores get detached, and they can't handle the socket messages coming through.

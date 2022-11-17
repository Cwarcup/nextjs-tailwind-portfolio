# Nextjs 13 Tailwind Portfolio Starter

This is a [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) starter template intended to be used as a portfolio or personal website. It comes out of the box configured with the latest technologies, tools, and best practices. It's built to be easily configured, customized and extended. It's also fully responsive and mobile friendly.


## Getting Started

Select which branch you want to use. There are two branches available at the moment:

Clone the repository and install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Branches

I plan on creating multiple branches with different features and configurations. If you have any suggestions, please let me know.

### Main

This is the main branch. It contains the most basic configuration and features.This includes a basic layout, a few pages, and a few components.

### Personal Site

This branch is for those who want to use this as a personal site. It serves as a site to showcase your work experience, skills, and get in touch with you.

This branch is setup with [emailJS](https://www.emailjs.com/) to send emails from your site. It also includes a contact form and a few pages. In order to use use emailJS, you will need to create an account and add your credentials to the `.env` file. See the [emailJS docs](https://www.emailjs.com/docs/) for more information on how to do this.

Here is an example of the emailJS template I used. You can use this as a starting point for your own template, but make sure you update the `templateParams` to match your own template.

![Alt text](src/images/photos/emailjs.png)

### Developer Portfolio - Coming Soon

This branch is for those who want to use this as a developer portfolio. It serves as a site to showcase your projects, skills, and get in touch with you.

### Blog - Coming Soon

This branch is for those who want to use this as a blog. Generate an RSS feed, and add a blog page to your site.

### Ecommerce - Coming Soon

This branch is for those who want to use this as an ecommerce site. It includes a basic ecommerce layout, checkout, authentication and database.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

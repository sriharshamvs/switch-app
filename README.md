# Project Switch - Application Dashboard

__Application Dashboard__ is the frontend for the __Project Switch__. The app makes RESTful API calls with the backend.

## Getting Started

This frontend application is currently deployed on __raspberrypi 3__. It can also be deployed on any Debian based Linux distribution.

- Clone this repo on to your local machine

```bash
git clone git@gitlab.com:project-switch/application-dashboard.git
```

### Environment

Things you need to deploy this application

- Raspbian or Debian GNU/Linux

- [Nodejs](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions) - v12.18

  NPM comes with __Nodejs__ by default

### Project setup

```bash
npm install
```

### Add Environment variables

Create a `.env` variable in the project root directory and add the backend `API_URL`

```bash
echo "VUE_APP_BACKEND_URL=http://localhost:5000/api" >> .env
```

__or__

```bash
echo "VUE_APP_BACKEND_URL=<API_URL>" >> .env
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

## Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Changelog

Check [CHANGELOG](CHANGELOG.md) to get the version details.

## License

This project is licensed under the GNU AGPLv3 License - see the [LICENSE](LICENSE) file for details

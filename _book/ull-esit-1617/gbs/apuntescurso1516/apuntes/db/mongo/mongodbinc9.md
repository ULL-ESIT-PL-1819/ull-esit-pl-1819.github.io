<!-- toc -->
### [Setting Up MongoDB in c9](https://docs.c9.io/docs/setting-up-mongodb)

MongoDB is preinstalled in your workspace. To run MongoDB, run the following below (passing the correct parameters to it). Mongodb data will be stored in the folder `data`.

```bash
$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod
```
You can start mongodb by running the `mongod` script on your project root:
```bash
$ ./mongod
```

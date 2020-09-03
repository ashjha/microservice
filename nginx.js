Last login: Thu Sep  3 02:19:10 on console
Ashutosh3150772:~ ashutoshjha$ cd Desktop/micrroservice-demo/
Ashutosh3150772:micrroservice-demo ashutoshjha$ ssh -i node-microservice-open.pem ubuntu@ec2-18-218-139-4.us-east-2.compute.amazonaws.com
Welcome to Ubuntu 18.04.5 LTS (GNU/Linux 5.3.0-1032-aws x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Wed Sep  2 20:51:53 UTC 2020

  System load:  0.0               Processes:           90
  Usage of /:   20.4% of 7.69GB   Users logged in:     0
  Memory usage: 20%               IP address for eth0: 172.31.7.220
  Swap usage:   0%


37 packages can be updated.
25 updates are security updates.


Last login: Wed Sep  2 18:46:01 2020 from 122.162.147.187
ubuntu@ip-172-31-7-220:~$ ll
total 48
drwxr-xr-x   8 ubuntu ubuntu 4096 Sep  2 19:38 ./
drwxr-xr-x   3 root   root   4096 Sep  2 18:42 ../
-rw-------   1 ubuntu ubuntu  706 Sep  2 19:38 .bash_history
-rw-r--r--   1 ubuntu ubuntu  220 Apr  4  2018 .bash_logout
-rw-r--r--   1 ubuntu ubuntu 3771 Apr  4  2018 .bashrc
drwx------   2 ubuntu ubuntu 4096 Sep  2 18:46 .cache/
drwx------   3 ubuntu ubuntu 4096 Sep  2 18:45 .gnupg/
drwxrwxr-x 153 ubuntu ubuntu 4096 Sep  2 19:08 .npm/
drwxrwxr-x   5 ubuntu ubuntu 4096 Sep  2 19:35 .pm2/
-rw-r--r--   1 ubuntu ubuntu  807 Apr  4  2018 .profile
drwx------   2 ubuntu ubuntu 4096 Sep  2 18:42 .ssh/
-rw-r--r--   1 ubuntu ubuntu    0 Sep  2 18:46 .sudo_as_admin_successful
drwxrwxr-x   4 ubuntu ubuntu 4096 Sep  2 19:23 microservice/
ubuntu@ip-172-31-7-220:~$ cd microservice/
ubuntu@ip-172-31-7-220:~/microservice$ git pull
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 3 (delta 2), reused 3 (delta 2), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/ashjha/microservice
   5ef3783..ab38ae8  master     -> origin/master
Updating 5ef3783..ab38ae8
Fast-forward
 mis3.js | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)
ubuntu@ip-172-31-7-220:~/microservice$ ll
total 44
drwxrwxr-x 4 ubuntu ubuntu 4096 Sep  2 20:52 ./
drwxr-xr-x 8 ubuntu ubuntu 4096 Sep  2 19:38 ../
drwxrwxr-x 8 ubuntu ubuntu 4096 Sep  2 20:52 .git/
-rw-rw-r-- 1 ubuntu ubuntu    0 Sep  2 18:49 README.md
-rw-rw-r-- 1 ubuntu ubuntu 1692 Sep  2 18:49 mis-demo.pem
-rw-rw-r-- 1 ubuntu ubuntu  461 Sep  2 18:49 mis1.js
-rw-rw-r-- 1 ubuntu ubuntu  461 Sep  2 19:23 mis2.js
-rw-rw-r-- 1 ubuntu ubuntu  467 Sep  2 20:52 mis3.js
drwxrwxr-x 2 ubuntu ubuntu 4096 Sep  2 19:23 mis4/
-rw-rw-r-- 1 ubuntu ubuntu 1692 Sep  2 19:05 node-microservice-open.pem
-rw-rw-r-- 1 ubuntu ubuntu   81 Sep  2 19:05 package-lock.json
-rw-rw-r-- 1 ubuntu ubuntu  454 Sep  2 19:05 package.json
ubuntu@ip-172-31-7-220:~/microservice$ nano mis3.js
ubuntu@ip-172-31-7-220:~/microservice$ node mis3.js
Server running at http://0.0.0:3003/
^C
ubuntu@ip-172-31-7-220:~/microservice$ node mis2.js
Server running at http://localhost:3010/
^C
ubuntu@ip-172-31-7-220:~/microservice$ pm2 start mis1.js mis2.js mis3.js
[PM2] Spawning PM2 daemon with pm2_home=/home/ubuntu/.pm2
[PM2] PM2 Successfully daemonized
[PM2] Starting /home/ubuntu/microservice/mis1.js in fork_mode (1 instance)
[PM2] Done.
[PM2] Starting /home/ubuntu/microservice/mis2.js in fork_mode (1 instance)
[PM2] Done.
[PM2] Starting /home/ubuntu/microservice/mis3.js in fork_mode (1 instance)
[PM2] Done.
┌─────┬─────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name    │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼─────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ mis1    │ default     │ 1.0.0   │ fork    │ 9169     │ 0s     │ 0    │ online    │ 28.6%    │ 17.1mb   │ ubuntu   │ disabled │
│ 1   │ mis2    │ default     │ 1.0.0   │ fork    │ 9183     │ 0s     │ 0    │ online    │ 14.3%    │ 16.7mb   │ ubuntu   │ disabled │
│ 2   │ mis3    │ default     │ 1.0.0   │ fork    │ 9192     │ 0s     │ 0    │ online    │ 0%       │ 15.8mb   │ ubuntu   │ disabled │
└─────┴─────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
ubuntu@ip-172-31-7-220:~/microservice$ nginx -V

Command 'nginx' not found, but can be installed with:

sudo apt install nginx-core  
sudo apt install nginx-extras
sudo apt install nginx-full  
sudo apt install nginx-light 

ubuntu@ip-172-31-7-220:~/microservice$ pm2 kil
[PM2][ERROR] Command not found

usage: pm2 [options] <command>

pm2 -h, --help             all available commands and options
pm2 examples               display pm2 usage examples
pm2 <command> -h           help on a specific command

Access pm2 files in ~/.pm2
ubuntu@ip-172-31-7-220:~/microservice$ pm2 kill
[PM2] [v] Modules Stopped
[PM2] Applying action deleteProcessId on app [all](ids: 0,1,2)
[PM2] [mis1](0) ✓
[PM2] [mis2](1) ✓
[PM2] [mis3](2) ✓
[PM2] [v] All Applications Stopped
[PM2] [v] PM2 Daemon Stopped
ubuntu@ip-172-31-7-220:~/microservice$ sudo apt update
Hit:1 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic InRelease
Get:2 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates InRelease [88.7 kB]
Get:3 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-backports InRelease [74.6 kB]
Get:4 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]     
Get:5 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 Packages [1054 kB]
Get:6 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/universe amd64 Packages [1103 kB]
Fetched 2409 kB in 1s (2865 kB/s)                                                                                     
Reading package lists... Done
Building dependency tree       
Reading state information... Done
34 packages can be upgraded. Run 'apt list --upgradable' to see them.
ubuntu@ip-172-31-7-220:~/microservice$ sudo apt install nginx
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following additional packages will be installed:
  fontconfig-config fonts-dejavu-core libfontconfig1 libgd3 libjbig0 libjpeg-turbo8 libjpeg8 libnginx-mod-http-geoip libnginx-mod-http-image-filter libnginx-mod-http-xslt-filter libnginx-mod-mail
  libnginx-mod-stream libtiff5 libwebp6 libxpm4 nginx-common nginx-core
Suggested packages:
  libgd-tools fcgiwrap nginx-doc ssl-cert
The following NEW packages will be installed:
  fontconfig-config fonts-dejavu-core libfontconfig1 libgd3 libjbig0 libjpeg-turbo8 libjpeg8 libnginx-mod-http-geoip libnginx-mod-http-image-filter libnginx-mod-http-xslt-filter libnginx-mod-mail
  libnginx-mod-stream libtiff5 libwebp6 libxpm4 nginx nginx-common nginx-core
0 upgraded, 18 newly installed, 0 to remove and 34 not upgraded.
Need to get 2462 kB of archives.
After this operation, 8210 kB of additional disk space will be used.
Do you want to continue? [Y/n] Y
Get:1 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 libjpeg-turbo8 amd64 1.5.2-0ubuntu5.18.04.4 [110 kB]
Get:2 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic/main amd64 fonts-dejavu-core all 2.37-1 [1041 kB]
Get:3 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic/main amd64 fontconfig-config all 2.12.6-0ubuntu2 [55.8 kB]
Get:4 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic/main amd64 libfontconfig1 amd64 2.12.6-0ubuntu2 [137 kB]
Get:5 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic/main amd64 libjpeg8 amd64 8c-2ubuntu8 [2194 B]
Get:6 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic/main amd64 libjbig0 amd64 2.1-3.1build1 [26.7 kB]
Get:7 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 libtiff5 amd64 4.0.9-5ubuntu0.3 [153 kB]
Get:8 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic/main amd64 libwebp6 amd64 0.6.1-2 [185 kB]
Get:9 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic/main amd64 libxpm4 amd64 1:3.5.12-1 [34.0 kB]
Get:10 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 libgd3 amd64 2.2.5-4ubuntu0.4 [119 kB]
Get:11 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 nginx-common all 1.14.0-0ubuntu1.7 [37.4 kB]
Get:12 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 libnginx-mod-http-geoip amd64 1.14.0-0ubuntu1.7 [11.2 kB]
Get:13 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 libnginx-mod-http-image-filter amd64 1.14.0-0ubuntu1.7 [14.6 kB]
Get:14 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 libnginx-mod-http-xslt-filter amd64 1.14.0-0ubuntu1.7 [13.0 kB]
Get:15 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 libnginx-mod-mail amd64 1.14.0-0ubuntu1.7 [41.8 kB]
Get:16 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 libnginx-mod-stream amd64 1.14.0-0ubuntu1.7 [63.7 kB]
Get:17 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 nginx-core amd64 1.14.0-0ubuntu1.7 [413 kB]
Get:18 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates/main amd64 nginx all 1.14.0-0ubuntu1.7 [3596 B]
Fetched 2462 kB in 0s (16.1 MB/s)
Preconfiguring packages ...
Selecting previously unselected package libjpeg-turbo8:amd64.
(Reading database ... 67376 files and directories currently installed.)
Preparing to unpack .../00-libjpeg-turbo8_1.5.2-0ubuntu5.18.04.4_amd64.deb ...
Unpacking libjpeg-turbo8:amd64 (1.5.2-0ubuntu5.18.04.4) ...
Selecting previously unselected package fonts-dejavu-core.
Preparing to unpack .../01-fonts-dejavu-core_2.37-1_all.deb ...
Unpacking fonts-dejavu-core (2.37-1) ...
Selecting previously unselected package fontconfig-config.
Preparing to unpack .../02-fontconfig-config_2.12.6-0ubuntu2_all.deb ...
Unpacking fontconfig-config (2.12.6-0ubuntu2) ...
Selecting previously unselected package libfontconfig1:amd64.
Preparing to unpack .../03-libfontconfig1_2.12.6-0ubuntu2_amd64.deb ...
Unpacking libfontconfig1:amd64 (2.12.6-0ubuntu2) ...
Selecting previously unselected package libjpeg8:amd64.
Preparing to unpack .../04-libjpeg8_8c-2ubuntu8_amd64.deb ...
Unpacking libjpeg8:amd64 (8c-2ubuntu8) ...
Selecting previously unselected package libjbig0:amd64.
Preparing to unpack .../05-libjbig0_2.1-3.1build1_amd64.deb ...
Unpacking libjbig0:amd64 (2.1-3.1build1) ...
Selecting previously unselected package libtiff5:amd64.
Preparing to unpack .../06-libtiff5_4.0.9-5ubuntu0.3_amd64.deb ...
Unpacking libtiff5:amd64 (4.0.9-5ubuntu0.3) ...
Selecting previously unselected package libwebp6:amd64.
Preparing to unpack .../07-libwebp6_0.6.1-2_amd64.deb ...
Unpacking libwebp6:amd64 (0.6.1-2) ...
Selecting previously unselected package libxpm4:amd64.
Preparing to unpack .../08-libxpm4_1%3a3.5.12-1_amd64.deb ...
Unpacking libxpm4:amd64 (1:3.5.12-1) ...
Selecting previously unselected package libgd3:amd64.
Preparing to unpack .../09-libgd3_2.2.5-4ubuntu0.4_amd64.deb ...
Unpacking libgd3:amd64 (2.2.5-4ubuntu0.4) ...
Selecting previously unselected package nginx-common.
Preparing to unpack .../10-nginx-common_1.14.0-0ubuntu1.7_all.deb ...
Unpacking nginx-common (1.14.0-0ubuntu1.7) ...
Selecting previously unselected package libnginx-mod-http-geoip.
Preparing to unpack .../11-libnginx-mod-http-geoip_1.14.0-0ubuntu1.7_amd64.deb ...
Unpacking libnginx-mod-http-geoip (1.14.0-0ubuntu1.7) ...
Selecting previously unselected package libnginx-mod-http-image-filter.
Preparing to unpack .../12-libnginx-mod-http-image-filter_1.14.0-0ubuntu1.7_amd64.deb ...
Unpacking libnginx-mod-http-image-filter (1.14.0-0ubuntu1.7) ...
Selecting previously unselected package libnginx-mod-http-xslt-filter.
Preparing to unpack .../13-libnginx-mod-http-xslt-filter_1.14.0-0ubuntu1.7_amd64.deb ...
Unpacking libnginx-mod-http-xslt-filter (1.14.0-0ubuntu1.7) ...
Selecting previously unselected package libnginx-mod-mail.
Preparing to unpack .../14-libnginx-mod-mail_1.14.0-0ubuntu1.7_amd64.deb ...
Unpacking libnginx-mod-mail (1.14.0-0ubuntu1.7) ...
Selecting previously unselected package libnginx-mod-stream.
Preparing to unpack .../15-libnginx-mod-stream_1.14.0-0ubuntu1.7_amd64.deb ...
Unpacking libnginx-mod-stream (1.14.0-0ubuntu1.7) ...
Selecting previously unselected package nginx-core.
Preparing to unpack .../16-nginx-core_1.14.0-0ubuntu1.7_amd64.deb ...
Unpacking nginx-core (1.14.0-0ubuntu1.7) ...
Selecting previously unselected package nginx.
Preparing to unpack .../17-nginx_1.14.0-0ubuntu1.7_all.deb ...
Unpacking nginx (1.14.0-0ubuntu1.7) ...
Setting up libjbig0:amd64 (2.1-3.1build1) ...
Setting up fonts-dejavu-core (2.37-1) ...
Setting up nginx-common (1.14.0-0ubuntu1.7) ...
Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /lib/systemd/system/nginx.service.
Setting up libjpeg-turbo8:amd64 (1.5.2-0ubuntu5.18.04.4) ...
Setting up libnginx-mod-mail (1.14.0-0ubuntu1.7) ...
Setting up libxpm4:amd64 (1:3.5.12-1) ...
Setting up libnginx-mod-http-xslt-filter (1.14.0-0ubuntu1.7) ...
Setting up libnginx-mod-http-geoip (1.14.0-0ubuntu1.7) ...
Setting up libwebp6:amd64 (0.6.1-2) ...
Setting up libjpeg8:amd64 (8c-2ubuntu8) ...
Setting up fontconfig-config (2.12.6-0ubuntu2) ...
Setting up libnginx-mod-stream (1.14.0-0ubuntu1.7) ...
Setting up libtiff5:amd64 (4.0.9-5ubuntu0.3) ...
Setting up libfontconfig1:amd64 (2.12.6-0ubuntu2) ...
Setting up libgd3:amd64 (2.2.5-4ubuntu0.4) ...
Setting up libnginx-mod-http-image-filter (1.14.0-0ubuntu1.7) ...
Setting up nginx-core (1.14.0-0ubuntu1.7) ...
Setting up nginx (1.14.0-0ubuntu1.7) ...
Processing triggers for systemd (237-3ubuntu10.42) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
Processing triggers for ufw (0.36-0ubuntu0.18.04.1) ...
Processing triggers for ureadahead (0.100.0-21) ...
Processing triggers for libc-bin (2.27-3ubuntu1.2) ...
ubuntu@ip-172-31-7-220:~/microservice$ sudo ufw app list
Available applications:
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
  OpenSSH
ubuntu@ip-172-31-7-220:~/microservice$ sudo ufw allow 'Nginx HTTP'
Rules updated
Rules updated (v6)
ubuntu@ip-172-31-7-220:~/microservice$ 
ubuntu@ip-172-31-7-220:~/microservice$ sudo ufw status
Status: inactive
ubuntu@ip-172-31-7-220:~/microservice$ systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Wed 2020-09-02 20:59:46 UTC; 1min 11s ago
     Docs: man:nginx(8)
 Main PID: 9963 (nginx)
    Tasks: 2 (limit: 1140)
   CGroup: /system.slice/nginx.service
           ├─9963 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           └─9966 nginx: worker process

Sep 02 20:59:46 ip-172-31-7-220 systemd[1]: Starting A high performance web server and a reverse proxy server...
Sep 02 20:59:46 ip-172-31-7-220 systemd[1]: nginx.service: Failed to parse PID from file /run/nginx.pid: Invalid argument
Sep 02 20:59:46 ip-172-31-7-220 systemd[1]: Started A high performance web server and a reverse proxy server.
ubuntu@ip-172-31-7-220:~/microservice$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
ubuntu@ip-172-31-7-220:~/microservice$ sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
Nginx HTTP                 ALLOW       Anywhere                  
Nginx HTTP (v6)            ALLOW       Anywhere (v6)             

ubuntu@ip-172-31-7-220:~/microservice$ cd /etc/nginx/conf.d/
ubuntu@ip-172-31-7-220:/etc/nginx/conf.d$ ll
total 8
drwxr-xr-x 2 root root 4096 Jan 10  2020 ./
drwxr-xr-x 8 root root 4096 Sep  2 20:59 ../
ubuntu@ip-172-31-7-220:/etc/nginx/conf.d$ cd ..
ubuntu@ip-172-31-7-220:/etc/nginx$ ll
total 72
drwxr-xr-x  8 root root 4096 Sep  2 20:59 ./
drwxr-xr-x 94 root root 4096 Sep  2 20:59 ../
drwxr-xr-x  2 root root 4096 Jan 10  2020 conf.d/
-rw-r--r--  1 root root 1077 Apr  6  2018 fastcgi.conf
-rw-r--r--  1 root root 1007 Apr  6  2018 fastcgi_params
-rw-r--r--  1 root root 2837 Apr  6  2018 koi-utf
-rw-r--r--  1 root root 2223 Apr  6  2018 koi-win
-rw-r--r--  1 root root 3957 Apr  6  2018 mime.types
drwxr-xr-x  2 root root 4096 Jan 10  2020 modules-available/
drwxr-xr-x  2 root root 4096 Sep  2 20:59 modules-enabled/
-rw-r--r--  1 root root 1482 Apr  6  2018 nginx.conf
-rw-r--r--  1 root root  180 Apr  6  2018 proxy_params
-rw-r--r--  1 root root  636 Apr  6  2018 scgi_params
drwxr-xr-x  2 root root 4096 Sep  2 20:59 sites-available/
drwxr-xr-x  2 root root 4096 Sep  2 20:59 sites-enabled/
drwxr-xr-x  2 root root 4096 Sep  2 20:59 snippets/
-rw-r--r--  1 root root  664 Apr  6  2018 uwsgi_params
-rw-r--r--  1 root root 3071 Apr  6  2018 win-utf
ubuntu@ip-172-31-7-220:/etc/nginx$ cd conf.d/
ubuntu@ip-172-31-7-220:/etc/nginx/conf.d$ ll
total 8
drwxr-xr-x 2 root root 4096 Jan 10  2020 ./
drwxr-xr-x 8 root root 4096 Sep  2 20:59 ../
ubuntu@ip-172-31-7-220:/etc/nginx/conf.d$ vim /app.conf

[1]+  Stopped                 vim /app.conf
ubuntu@ip-172-31-7-220:/etc/nginx/conf.d$ ll
total 8
drwxr-xr-x 2 root root 4096 Jan 10  2020 ./
drwxr-xr-x 8 root root 4096 Sep  2 20:59 ../
ubuntu@ip-172-31-7-220:/etc/nginx/conf.d$ cd ../../../
ubuntu@ip-172-31-7-220:/$ cd \
> 
ubuntu@ip-172-31-7-220:~$ ^C
ubuntu@ip-172-31-7-220:~$ cd microservice/
ubuntu@ip-172-31-7-220:~/microservice$ hostname -I
172.31.7.220 
ubuntu@ip-172-31-7-220:~/microservice$ ^C
ubuntu@ip-172-31-7-220:~/microservice$ cd /etc/nginx/sites-available/
ubuntu@ip-172-31-7-220:/etc/nginx/sites-available$ ll
total 12
drwxr-xr-x 2 root root 4096 Sep  2 20:59 ./
drwxr-xr-x 8 root root 4096 Sep  2 20:59 ../
-rw-r--r-- 1 root root 2416 Apr  6  2018 default
ubuntu@ip-172-31-7-220:/etc/nginx/sites-available$ nano default 
ubuntu@ip-172-31-7-220:/etc/nginx/sites-available$ sudo nano default 

  GNU nano 2.9.3                                                                                     default                                                                                                

##
# You should look at the following URL's in order to grasp a solid understanding
# of Nginx configuration files in order to fully unleash the power of Nginx.
# https://www.nginx.com/resources/wiki/start/
# https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/
# https://wiki.debian.org/Nginx/DirectoryStructure
#
# In most cases, administrators will remove this file from sites-enabled/ and
# leave it as reference inside of sites-available where it will continue to be
# updated by the nginx packaging team.
#
# This file will automatically load configuration files provided by other
# applications, such as Drupal or Wordpress. These applications will be made
# available underneath a path with that package name, such as /drupal8.
#
# Please see /usr/share/doc/nginx-doc/examples/ for more detailed examples.
##

# Default server configuration
#
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        # SSL configuration
        #
        # listen 443 ssl default_server;
        # listen [::]:443 ssl default_server;
        #
        # Note: You should disable gzip for SSL traffic.
        # See: https://bugs.debian.org/773332
        #
        # Read up on ssl_ciphers to ensure a secure configuration.
        # See: https://bugs.debian.org/765782
        #
        # Self signed certs generated by the ssl-cert package
        # Don't use them in a production server!
        #
        # include snippets/snakeoil.conf;

        root /var/www/html;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name _;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }

        # pass PHP scripts to FastCGI server
        #
        #location ~ \.php$ {
        #       include snippets/fastcgi-php.conf;

^G Get Help      ^O Write Out     ^W Where Is      ^K Cut Text      ^J Justify       ^C Cur Pos       M-U Undo         M-A Mark Text    M-] To Bracket   M-▲ Previous     ^B Back          ^◀ Prev Word
^X Exit          ^R Read File     ^\ Replace       ^U Uncut Text    ^T To Spell      ^_ Go To Line    M-E Redo         M-6 Copy Text    M-W WhereIs Next M-▼ Next         ^F Forward       ^▶ Next Word

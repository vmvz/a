#!/usr/bin/env bash
cat > /etc/resolv.conf <<END
nameserver 223.5.5.5
nameserver 114.114.115.115
nameserver 1.2.4.8
END
rm -rf /etc/apt/sources.list*
cat > /etc/apt/sources.list <<END
deb http://mirrors.aliyun.com/debian/ stretch main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch main non-free contrib
deb http://mirrors.aliyun.com/debian-security stretch/updates main
deb-src http://mirrors.aliyun.com/debian-security stretch/updates main
deb http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib
END
apt-get -q -y update
apt-get -y install net-tools htop lrzsz vim wget screen curl git build-essential

ifconfig

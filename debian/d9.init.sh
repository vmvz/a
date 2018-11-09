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
#deb http://mirrors.163.com/debian/ sid contrib main non-free
#deb-src http://mirrors.163.com/debian/ sid contrib main non-free
END
cat > /root/.vimrc <<END
syntax on
set clipboard+=unnamed
set nu
set showmatch
set hlsearch
set tabstop=4
set softtabstop=4
set shiftwidth=4
END
apt-get -q -y update
apt-get -y install net-tools htop lrzsz vim wget screen curl git build-essential

ifconfig

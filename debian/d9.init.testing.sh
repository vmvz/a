#!/usr/bin/env bash
cat > /etc/resolv.conf <<END
nameserver 223.5.5.5
nameserver 114.114.115.115
nameserver 1.2.4.8
END
rm -rf /etc/apt/sources.list*
cat > /etc/apt/sources.list <<END
deb https://mirrors.aliyun.com/debian/ testing main contrib non-free
deb https://mirrors.aliyun.com/debian/ testing-updates main contrib non-free
deb https://mirrors.aliyun.com/debian-security/ testing/updates main contrib non-free
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
sed -i "s/^#PermitRootLogin.*$/PermitRootLogin yes/g" /etc/ssh/sshd_config;cat /etc/ssh/sshd_config|grep Root;service sshd restart
ifconfig

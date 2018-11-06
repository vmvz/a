#!/usr/bin/env bash
#sed -i '1i\#123'  /etc/resolv.conf
#sed -i '$a\#123'  /etc/resolv.conf
cat > /etc/resolv.conf <<END
nameserver 223.5.5.5
nameserver 114.114.115.115
nameserver 1.2.4.8
END
apt-get -y install git
git clone --depth=1 https://github.com/wting/autojump.git
cd autojump && ./install.py
sed -i '$a\[[ -s ~/.autojump/etc/profile.d/autojump.sh ]] && . ~/.autojump/etc/profile.d/autojump.sh' ~/.bashrc
source ~/.bashrc
autojump --version
echo "j ..."
#!/bin/sh

#curl --header "Accept: application/json" --header "Content-Type: application/json" http://localhost:3000

gps_ip_file=${1}
gps_op_file=gps_op.txt

cat /dev/null > ${gps_op_file}

echo "Retrieving the lat long"

while read line
do 
   loc_name=`echo ${line} | cut -d "/" -f5`
   loc_lat=`curl --silent ${line} | grep bound` 
   echo "${line}|${loc_name}|${loc_lat}"
   echo "${loc_name}|${loc_lat}" >> ${gps_op_file}
done < ${gps_ip_file}

echo "Retrieve completed"

#!/bin/bash

TIME=$(date +"%H:%M")
DATE=$(date +"%a %d/%m")

BATTERY_PERCENTAGE=$(pmset -g batt | egrep '([0-9]+\%).*' -o --colour=auto | cut -f1 -d'%')
BATTERY_STATUS=$(pmset -g batt | grep "'.*'" | sed "s/'//g" | cut -c 18-19)
BATTERY_REMAINING=$(pmset -g batt | egrep -o '([0-9]+%).*' | cut -d\  -f3)

BATTERY_CHARGING=""
if [ "$BATTERY_STATUS" == "Ba" ]; then
  BATTERY_CHARGING="false"
elif [ "$BATTERY_STATUS" == "AC" ]; then
  BATTERY_CHARGING="true"
fi

echo $(cat <<-EOF
{
    "battery": {
        "percentage": $BATTERY_PERCENTAGE,
        "charging": $BATTERY_CHARGING,
        "remaining": "$BATTERY_REMAINING"
    },
    "datetime": {
        "time": "$TIME",
        "date": "$DATE"
    }
}
EOF
)

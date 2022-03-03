#! /bin/bash
while IFS=";" read -r user_path element parent count \
                        min avg max perc_50 perc_90 perc_95 perc_99 \
                        success success_rate failure failure_rate
do
  echo "request_count $count"
  echo "average_response_time $avg"
  echo "max_response_time $max"
  echo "min_response_time $min"
  echo "p50 $perc_50"
  echo "p90 $perc_90"
  echo "p95 $perc_95"
  echo "p99 $perc_99"
done < <(tail -n +2 transactions.csv)
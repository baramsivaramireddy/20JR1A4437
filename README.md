# 20JR1A4437

## Bakend

 In these app we have to build a  two  api endpoints
1 end point 
        for gettin all trains data and sort them based on results

        ```
        http://localhost:8000/trains
        
        ```

2 end point 
         for single train
        
        ```
        http://localhost:8000/trains/:{id}
        
        ```
 
we have get data from john server

implementation detail

get access token for every request
when 1 end point got hit . call the john server for all trains
when 2 end point got hit  . call john server for  one train


## Frontend

we have to implement two pages

one  page to get all trains 

ui of frontend :

![all train image ](https://github.com/baramsivaramireddy/20JR1A4437/blob/main/frontend%20all%20trains.png?raw=true)

other page to get one train


![one train image ](https://github.com/baramsivaramireddy/20JR1A4437/blob/main/frontend%20single%20train.png?raw=true)
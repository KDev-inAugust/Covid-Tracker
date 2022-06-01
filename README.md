# Covid-Tracker
This web app tracks covid data for the United States using an API that aggregates and updates covid information each day.
The app has three main features
1- The app shows a table with information regarding total covid cases for each United States Territory and a field for both active cases and cases per million.
2- The app allows for customiziable territory views allowing the user to select and view only the territories they are interesteed in.
3- once these custom territories are selected the user can average data for total active cases and cases per million.

This fucntionality is intended to be used by people who only want "at-a-glance" information for the few states they have family in or the states they may be planning to travvelling in.

Both the grid and the dropdown menu state selector are arranged by the territory that has had the most cases and both of these are populated by the API.
This means that if one state surpases another both the dropdown and the grid will rearrange accordingly. 
The custom card views can be edited and added to or subtracted to withour refreshing the browser and the averages always reflect only displayed cards so no borwser refresh is ever necessary. 

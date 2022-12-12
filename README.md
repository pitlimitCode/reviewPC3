## review Pijar Camp 3, React JS containt Table

rename manual title project on file program: package.json 1 line, package-lock.json 2 line  

Quiz: https://drive.google.com/file/d/15JAnDBzHUXib93L6PL0VNNrG0UfXtBwj/view?usp=sharing  
API Reference: https://randomuser.me/documentation  


date di example: username(crypt), name, email, gender, register date.

filter by: gender.
sort by tiap kolom (1: string, number) (2: date).

setiap hit api akan berdeda dengan hit api selanjutnya, jadi (di client-side dan server-side)
skenario 1: tetap kerjakan dan setiap perubahan search sort dan filter harus hit api
skenario 2: hit 1 api 25 data, dan search sort dan filter pakai kodingan sendiri atau library

[Start from 09 Dec 2022, 00.30 PM] 3 days to create this Personal Project  
1. Website page that contains a data table and have these following functionalities:  
  a. Search by keyword,  
  b. Filter by gender,  
  c. Pagination.  
2. Notice that the API response is not filtered/sorted correctly. Just want to see how you implement the fetch endpoint payload in the correct way.  
3. Can use any 3rd party library for design systems or component styling.  
4. Use any state management if needed.  
5. Public Git repo project.  
6. Project preview by hosting  vercel.  

Bonus  
1. Add Sort Functionality.  
2. Integration / Unit Testing Implemented.  
3. Reset Filter Functionality.  

form kumpul tugas: https://forms.gle/PGbZWrWCA8goze6Z6  



note - my boilerplate react js:
npm bootstrap, axios, env, form
page most component i used in bootstrap
page show axios get result, show env
page http-post form






run project:  
```
npm start
```

create a production bundle:  
```
npm run build
```
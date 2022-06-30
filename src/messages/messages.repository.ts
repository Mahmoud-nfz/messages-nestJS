import { readFile, writeFile } from "fs";

export class MessagesRepository{
    async findOne(id : string){
        readFile('messages.json', 'utf8', function(err, data){
            // Display the file content
            console.log(data);
            const messages = JSON.parse(data) ;
        });
        return "dasdassda"
    }
    async findAll(){
        readFile('messages.json', 'utf8', function(err, data){
            // Display the file content
            console.log(data);
            const messages = JSON.parse(data) ;
        });
    }
    async create(content:string){
        readFile('messages.json', 'utf8', function(err, data){
            // Display the file content
            console.log(data);
            const messages = JSON.parse(data) ;
            const id = Math.floor(Math.random()*999) ; 
            messages[id] = {id,content} ;
            writeFile("movies.txt", data,
                {
                    encoding: "utf8",
                    flag: "w",
                    mode: 0o666
                },
                (err) => {
                    if (err)
                    console.log(err);
                    else {
                    console.log("File written successfully\n");
                    }
            });
        });
    }
}
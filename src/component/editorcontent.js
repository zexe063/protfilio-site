

import hljs from "highlight.js"
import  'highlight.js/styles/github-dark.css';
import { useEffect, useRef } from "react";


function Editor(){

const python = useRef(null);
const cplus = useRef(null);
    useEffect(()=>{
        hljs.highlightBlock(python.current)
        hljs.highlightBlock(cplus.current)
    },[])
    return(
        <div className="editor">
            <div className="content">

        <div className="data">
            <h2>Accelerate The High Quality Software<br></br> Development.
            <span>Our Editor Comes With AI Tool that Write Any Language Code.</span></h2>
        </div>

        <div className="twoeditor">
 <div className="python">
    <div className="program">
        <pre ref={python}>
            <code>
                {
                    ` 
                   
                    def read_csv(filename):
                        with open(filename, 'r') as file:
                            reader = csv.DictReader(file)
                            return [row for row in reader]
                    
                    def filter_data(rows, criteria):
                        # Example: Filter rows where 'Age' column is greater than 25
                        return [row for row in rows if int(row['Age']) > criteria]
                    
                    def calculate_average(rows, column_name):
                        total = 0
                        count = 0
                        for row in rows:
                            total += float(row[column_name])
                            count += 1
                        return total / count if count else 0
                    
                    def write_csv(filename, rows):
                        if not rows:
                            return
                    
                        with open(filename, 'w', newline='') as file:
                            writer = csv.DictWriter(file, fieldnames=rows[0].keys())
                            writer.writeheader()
                            writer.writerows(rows)
                    
                    `
                }
            </code>
        </pre>
    </div>
 </div>

 <div className="cplus">
    <div className="program">
        <pre ref={cplus}>
            <code>
                {`
                #include <iostream>
                #include <string>
                
                class Person {
                private:
                    std::string name;
                    int age;
                
                public:
                    // Default Constructor
                    Person() : name("Unknown"), age(0) {}
                
                    // Parameterized Constructor
                    Person(std::string n, int a) : name(n), age(a) {}
                
                    // Setters
                    void setName(std::string n) {
                        name = n;
                    }
                
                    void setAge(int a) {
                        age = a;
                    }
                
                    
                };
                
                `}
            </code>
        </pre>
    </div>
 </div>
        </div>

        </div>

        </div>
     
    )
}

export default Editor
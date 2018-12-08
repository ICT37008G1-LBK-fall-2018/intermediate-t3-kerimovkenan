
let students = [
    {
        FirstName: 'name 1',
        LastName: 'lname 1',
        PersonalNumber: '00000000000',
        Grade: 84
    },
    {
        FirstName: 'name 2',
        LastName: 'lname 2',
        PersonalNumber: '00000000001',
        Grade: 30
    },
    {
        FirstName: 'name 3',
        LastName: 'lname 3',
        PersonalNumber: '00000000002',
        Grade: 55
    },
    {
        FirstName: 'name 4',
        LastName: 'lname 4',
        PersonalNumber: '00000000003',
        Grade: 70
    },
    {
        FirstName: 'name 5',
        LastName: 'lname 5',
        PersonalNumber: '00000000004',
        Grade: 92
    },
    {
        FirstName: 'name 6',
        LastName: 'lname 6',
        PersonalNumber: '00000000005',
        Grade: 88
    },
    {
        FirstName: 'name 7',
        LastName: 'lname 7',
        PersonalNumber: '00000000006',
        Grade: 99
    },
    {
        FirstName: 'name 8',
        LastName: 'lname 8',
        PersonalNumber: '00000000007',
        Grade: 65
    }

];


function getStudents(studList){
    if(Array.isArray(studList)){
        let _table = document.createElement('table'),
            _thead = document.createElement('thead'),
            _tbody = document.createElement('tbody'),
            _trHead = document.createElement('tr'),
            _keys = Object.keys(studList[0]);

            /// Head
            _keys.forEach(key => {
                let th = document.createElement('th');
                th.textContent = key;
                _trHead.appendChild(th);
            })

        studList.forEach(student => {
            let keys = Object.keys(student),
            _trBody = document.createElement('tr');  
                 
            keys.forEach(key => {
                let  td = document.createElement('td'),
                     grade = student['Grade']
                
                 td.textContent = student[key];

                 if(key === 'Grade'){
                    if(grade >= 91){
                        td.textContent += ' A';
                    }else if(grade >= 81 && grade < 91){
                        td.textContent += ' B';
                    }else if(grade >= 71 && grade < 81){
                        td.textContent += ' C';
                    }else if(grade >= 61 && grade < 71){
                        td.textContent += ' D';
                    }else if(grade >= 51 && grade < 61){
                        td.textContent += ' E';
                    }else if(grade >= 41 && grade < 51){
                        td.textContent += ' FX';
                    }else{
                        td.textContent += ' F';
                    }
                }

                 if(grade <= 51){
                    _trBody.style.backgroundColor = 'red'; 
                 }else{
                     _trBody.style.backgroundColor = 'green';
                 }
                 

                _trBody.appendChild(td);        
            });


      
            // Tbody
            _tbody.appendChild(_trBody);
            _table.appendChild(_tbody);

            // Thead
            _thead.appendChild(_trHead);
            _table.appendChild(_thead);
        })

        return document.body.appendChild(_table);
    }
}
getStudents(students);
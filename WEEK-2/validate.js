// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    if(!title){
        return "title required"
    }
    if(title.length<3){
        return "min 3 char required"
    }
    return "title is valid"
  }
  // 2. Validate priority (must be: low, medium, high)
 function validatePriority(priority) {
    const priorities=['low','medium','high']
                        let result=priorities.includes(priorities)
                        if(result==false){
                            return 'invalid priority'
                        }
                        return true
 }
 // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        let dueDate=new Date('2026-07-18')
                        let today=new Date()
                        if(dueDate>today){
                            return true
                        }
                      }
    export {validateTitle,validatePriority,validateDueDate}            
import { compareAsc, format } from 'date-fns'

format(new Date(), 'yyyy-MM-dd')

const Item = (title, description, year, month, day, priority) => {
    var Title = title;
    const changeTitle = (newTitle) => (Title = newTitle);
    const checkTitle = () => Title;

    var Description = description;
    const changeDescription = (newDescription) => (Description = newDescription);
    const checkDescription = () => Decription;

    var dueDate = new Date(year, month, day);
    const changeDate = (newYear, newMonth, newDay) => (dueDate = new Date(newYear, newMonth, newDay));
    const checkDate = () => dueDate;

    var Priority = priority;
    const changePriority = (newPriority) => (Priority = newPriority);
    const checkDescription = () => Decription;

    var complete = false;
    const changeCompletion = () => (complete ? false : true);
    const checkCompletion = () => complete

    const updateItem = (newTitle, newDescription, newYear, newMonth, newDay, newPriority) => {
        changeTitle(newTitle);
        changeDescription(newDescription);
        changeDate(newYear, newMonth, newDay);
        changePriority(newPriority);
    }
    
    return {changeDate, checkDate}
}





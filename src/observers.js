 
let options = { threshold: [0.5] };

const observer = (clas) => {
  return new IntersectionObserver((entry) => {
      entry.forEach(change => {  
        if (change.isIntersecting) {
          change.target.classList.remove(`${clas}`)
        } else {
          change.target.classList.add(`${clas}`) 
        }
      });
  }, options);
} 


module.exports = observer
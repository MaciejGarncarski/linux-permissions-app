import './style.css'


const app = () => {

  const ownerCheckboxes = [...document.querySelectorAll('[data-who="owner"]')] as HTMLInputElement[];
  const groupCheckboxes = [...document.querySelectorAll('[data-who="group"]')] as HTMLInputElement[];
  const everyoneCheckboxes = [...document.querySelectorAll('[data-who="everyone"]')] as HTMLInputElement[];
  const resultSum = [0, 0, 0];

  const sumChmod = (checkboxes: HTMLInputElement[], valueSum: number) => {
    checkboxes.forEach((input) => {
        const handleClick = () => {
          if(input.dataset.value){
            const value = +input.dataset.value;
            if(input.checked){
              resultSum[valueSum] += value
            }else{
              resultSum[valueSum] -= value
            }
          }
        }
        input.addEventListener('click', handleClick)
      })
      
  }

  const updateResult = () => {
    const result = document.querySelector('#result') as HTMLInputElement;
    const form = document.querySelector('#chmod-form') as HTMLFormElement;
    const setResult = () => result.textContent = `chmod ${resultSum.join('')}`
    setResult()
    form.addEventListener('change', setResult)
  }

  sumChmod(ownerCheckboxes, 0)
  sumChmod(groupCheckboxes, 1)
  sumChmod(everyoneCheckboxes, 2)
  updateResult()

}

app()
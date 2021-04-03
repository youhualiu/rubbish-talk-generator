function randomIndex(num) {
  let index = Math.floor(Math.random() * num)
  return index
}

function generateTalk(option) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 Code'],
    designer: ['畫一張圖', '改個 Logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 Business model', '找 VC 募錢']

  }
  const selection = ['工程師', '設計師', '創業家']
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let rubbishTalk = '身為一個'
  if (option.role === 'engineer') {
    rubbishTalk += selection[0]
    rubbishTalk += task.engineer[randomIndex(task.engineer.length)]
  } else if (option.role === 'designer') {
    rubbishTalk += selection[1]
    rubbishTalk += task.designer[randomIndex(task.designer.length)]
  } else if (option.role === 'entrepreneur') {
    rubbishTalk += selection[2]
    rubbishTalk += task.entrepreneur[randomIndex(task.entrepreneur.length)]
  } else {
    return '你需要選一個對象才能開始!'
  }

  rubbishTalk += phrase[randomIndex(phrase.length)]
  rubbishTalk += '吧!'
  return rubbishTalk
}

module.exports = generateTalk
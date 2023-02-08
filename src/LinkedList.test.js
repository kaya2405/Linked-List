import { LinkedList } from './LinkedList.js'

function init() {
  const list = new LinkedList()
  list
    .append('a')
    .append('b')
    .append('c')
    .append('d')
  
  return list
}

describe('Linked List', () => {

  test('Append', () => {
    let list = init()
    expect(list.append('e').toString()).toBe('a,b,c,d,e')
  })

  test('Prepend', () => {
    let list = init()
    expect(list.prepend('e').toString()).toBe('e,a,b,c,d')
    expect(list.head.value).toBe('e')
    expect(list.tail.value).toBe('d')
  })

  test('Prepend in epty list', () => {
    let list = new LinkedList()
    expect(list.prepend('e').toString()).toBe('e')
    expect(list.head.value).toBe('e')
    expect(list.tail.value).toBe('e')
  })

  test('Find', () => {
    let list = init()
    expect(list.find('c').toString()).toBe('c')
    expect(list.find('f')).toBe(null)
  })

  test('Delete', () => {
    let list = init()
     
    expect(list.delete('a').toString()).toBe('a')
    expect(list.toString()).toBe('b,c,d')
    list.delete('b')
    expect(list.toString()).toBe('c,d')
    list.delete('c')
    expect(list.toString()).toBe('d')

    expect(list.head.value).toBe('d')
    expect(list.tail.value).toBe('d')
  })

  test('Insert int the middle', () => {
    let list = init()
    let prev = list.find('c')
    list.insertAfter('e', prev)
    expect(list.toString()).toBe('a,b,c,e,d')
  })
})

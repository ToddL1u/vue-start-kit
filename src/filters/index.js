export function gender (val) {
  val = parseInt(val)
  if ( val === 0)
    return '女'
  else if(val === 1)
    return '男'
  else
    return '不詳'
}

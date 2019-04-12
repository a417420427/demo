import bus from './bus'

bus.$on('getTrace', () => this.trace)

bus.$on('pushTrace', currentTrace =>  {
    if(currentTrace) {
        bus.trace += currentTrace + '-'
    }
})

export default bus

export default{
    install:function(Vue){
        // 平方
        Vue.directive('square',function(el,binding){
            el.innerHTML = Math.pow(binding.value,2)
        });
        // 开方
        Vue.directive('sqrt',function(el,binding){
            el.innerHTML = Math.sqrt(binding.value)
        });
        // sin
        Vue.directive(‘sin’, function (el, binding) {
        el.innerHTML = Math.sin(binding.value,2);
        });
        // cos
        Vue.directive(‘cos’, function (el, binding) {
        el.innerHTML = Math.cos(binding.value,2);
        });
        // tan
        Vue.directive(‘tan’, function (el, binding) {
        el.innerHTML = Math.tan(binding.value,2);
        });    
    }
}
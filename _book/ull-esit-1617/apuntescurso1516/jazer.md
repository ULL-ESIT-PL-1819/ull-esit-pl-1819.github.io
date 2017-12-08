{% regexp height="70%"" %}
Rellene lo que falta en estas pruebas del código del conversor de temperatura:


          var assert = chai.______;

          suite('temperature', function() {
              test('[1,{a: 2}] == [1,{a: 2}]', function() {
                assert._________([1, {a:2}], [1, {a:2}]);
              });
              test('5X = error', function() {
                  original.value = "5X";
                  calculate();
                  assert._____(converted.innerHTML, /ERROR/);
              });
          });

{% solution %}
      var assert = chai.assert;

      suite('temperature', function() {
          test('[1,{a: 2}] == [1,{a: 2}]', function() {
            assert.deepEqual([1, {a:2}], [1, {a:2}]);
          });
          test('5X = error', function() {
              original.value = "5X";
              calculate();
              assert.match(converted.innerHTML, /ERROR/);
          });
      });

{% validation %}
/
  assert(.|n)+
  deepEqual(.|\n)+
  match
/x
{% endregexp %}


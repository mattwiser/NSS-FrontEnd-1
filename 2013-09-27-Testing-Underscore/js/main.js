function filter_evens(numbers)
{
  return _.filter(numbers, function(num){return (num % 2) == 0;});
}

function filter_odds(numbers)
{
  return _.filter(numbers, function(num){return (num % 2) == 1;});
}

function filter_short_strings(strings)
{
  return _.filter(strings, function(string){return string.length < 4;});
}

function filter_a_strings(strings)
{
  return _.filter(strings, function(string){return string[0].toLowerCase() == 'a' ;});
}

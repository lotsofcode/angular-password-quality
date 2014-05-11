angular-password-quality
========================

An AngularJS Directive to Indicate a Password´s Strength.


Demo Page: http://projects.tomraithel.de/angular-password-quality/index.html

### Usage

```javascript
<!-- Bind your input field to a model (e.g. myPassword) -->
<input type="password" ng-model="myPassword" >

<!-- Add the password-quality directive and bind the `password` attribute to your model: -->
<password-quality password="myPassword">
  <div>
    <span ng-show="passwordQuality == 0">Not yet rated</span>
    <span ng-show="passwordQuality == 1">Weak</span>
    <span ng-show="passwordQuality == 2">Medium</span>
    <span ng-show="passwordQuality == 3">Strong</span>
    <span ng-show="passwordQuality == 4">Awesome</span>
  </div>
</password-quality>
```


Within the `password-quality` you have access to the `passwordQuality` property which is an int value between 0 and 4.
Your are free to adjust the inner html in this tag as you wish.
(See [the demo](http://projects.tomraithel.de/angular-password-quality/index.html) for another example)

### Meaning of `passwordQuality` values:

- `0` not rated
- `1` weak passsword
- `2` medium password
- `3` strong password
- `4` best password


### The directive

You can copy the directive from [scripts/directives/password-quality.js](https://github.com/tomraithel/angular-password-quality/blob/master/app/scripts/directives/password-quality.js)

The code to determine the quality value is basically the same that is used in Microsofts password-checker on
[passwordday.org](https://passwordday.org). They require you enter a 14 character password with at least 1 lower case,
1 upper case, 1 numeric and 1 special character to get the best score possible.

However, this is just a recommendation - if you think your validation needs better rules, go ahead and adjust the directive as you wish.


### License

MIT: http://tomraithel.mit-license.org
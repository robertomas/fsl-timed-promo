# fsl-timed-promo v.1.0.1
Little jQuery script to show or hide a div between a set timed period


## Step 1
insert script in head or footer

```html
<script type="text/javascript" src="//code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="./dist/fsl.timed-promo.min.js"></script>
</pre>
```


## Step 2
add data-fsl-timed-promo attributes to the div you want to show or hide

```bash
data-fsl-timed-promo to initiate script
data-fsl-start-date="2019, 7, 1" format (YEAR, MONTH, DAY)
data-fsl-end-date="2019, 7, 5" format (YEAR, MONTH, DAY)
```

## Step 3
add data-fsl-display-type attributes to display other than block

```bash
data-fsl-display-type="flex"
data-fsl-display-type="inline-block"

```


Example: To show div between July 1th and july 5th and then another div from July 6th to July 10th
```html
<div class="promo-1 promo" data-fsl-timed-promo data-fsl-start-date="2019, 7, 1" data-fsl-end-date="2019, 7, 5">
  <h1>PROMO 1</h1>
</div>
<div class="promo-2 promo" data-fsl-timed-promo data-fsl-start-date="2019, 7, 6" data-fsl-end-date="2019, 7, 10">
  <h1>PROMO 2</h1>
</div>

```

## Add default css to hide all by default
add css to hide div's by default
```html
[data-fsl-timed-promo] {
  display: none;
}
```

or

```html
<style>
  [data-fsl-timed-promo] {
    display: none;
  }
</style>
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

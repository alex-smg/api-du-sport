
<!-- resources/views/welcome.blade.php -->
<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link  rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script src="{{ mix('js/app.js') }}" defer></script>
    <link href="https://fonts.googleapis.com/css?family=Overpass:300,400,600,700,800" rel="stylesheet">

</head>
<body>
<div id="app">
    <navbar></navbar>
    <main>
        <allathletes></allathletes>
    </main>

</div>
</body>
</html>
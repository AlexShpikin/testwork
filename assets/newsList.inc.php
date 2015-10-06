<?php
$newsList = array( 
"0"=> array(
"date" => "06.01.2015",
"title" => "Lorem ipsum dolor sit amet",
"preview" => "Commodi atque vero ut dolorem, ullam qui sit! Modi numquam unde, aut ab. Perspiciatis, consequatur, natus.",
"url" => "#testLink",
"image" => "images/bg2.jpg"
),
"1"=> array(
"date" => "06.01.2015",
"title" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
"preview" => "Commodi atque vero ut dolorem, ullam qui sit! Modi numquam unde, aut ab. Perspiciatis, consequatur, natus.",
"url" => "#testLink",
"image"=> "images/bg2.jpg"
)
,
"2"=> array(
"date" => "06.01.2015",
"title" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
"preview" => "Commodi atque vero ut dolorem, ullam qui sit! Modi numquam unde, aut ab. Perspiciatis, consequatur, natus.",
"url" => "#testLink",
"image"=> "images/bg2.jpg"
)
,
"3"=> array(
"date" => "06.01.2015",
"title" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
"preview" => "Commodi atque vero ut dolorem, ullam qui sit! Modi numquam unde, aut ab. Perspiciatis, consequatur, natus.",
"url" => "#testLink",
"image"=> "images/bg2.jpg"
)
,
"4"=> array(
"date" => "06.01.2015",
"title" => "Lorem ipsum dolor sit amet,",
"preview" => "Commodi atque vero ut dolorem, ullam qui sit! Modi numquam unde, aut ab. Perspiciatis, consequatur, natus.",
"url" => "#testLink",
"image"=> "images/bg2.jpg"
)
,
"5"=> array(
"date" => "06.01.2015",
"title" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
"preview" => "Commodi atque vero ut dolorem, ullam qui sit! Modi numquam unde, aut ab. Perspiciatis, consequatur, natus.",
"url" => "#testLink",
"image"=> "images/bg2.jpg"
)
,
"6"=> array(
"date" => "06.01.2015",
"title" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
"preview" => "Commodi atque vero ut dolorem, ullam qui sit! Modi numquam unde, aut ab. Perspiciatis, consequatur, natus.",
"url" => "#testLink",
"image"=> "images/bg2.jpg"
)
);
if(!empty($_GET['count'])){
	$count = $_GET['count']; 
}
$limit = 5; 
$all = count($newsList);
$first = count($newsList) - $count;
$last = $first + $limit;


if($count > $limit){
	echo json_encode(array_slice($newsList, $first, $last));
	//echo $newsList);
}else{
	echo json_encode(array_slice($newsList, $all-$count, $all));
}
?>
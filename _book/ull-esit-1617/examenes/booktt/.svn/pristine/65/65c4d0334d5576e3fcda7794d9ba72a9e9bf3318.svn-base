use strict;
use warnings;
use Template;

my $bookname = shift @ARGV || 'perlexamples';
my $tt = Template->new(
           'INCLUDE_PATH' => [ '.' ],
           #'ABSOLUTE' => 1,
           #'PLUGIN_BASE' => [],
           #'POST_PROCESS' => [],
           #'PRE_PROCESS' => [],
           #'RELATIVE' => 1,
           #'VARIABLES' => {},
           # INTERPOLATE  => 1,
           # EVAL_PERL    => 1,
          ) || die Template->error();


$tt->process(
  "$bookname.tt2", 
  {},
  "$bookname.tex", 
  #{binmode => 1} 
) || die $tt->error(), "\n";



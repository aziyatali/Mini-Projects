CC = gcc
CFLAGS = -g -w -O3

WEEK  = 8

all: libpngparser solid checkerboard filter circle rect resize tests

clean:
	rm -f libpngparser.a solid checkerboard filter circle rect resize *.o

.PHONY: all clean fix_all_bugs tests

libpngparser: pngparser.h pngparser.c crc.c crc.h
	$(CC) -c pngparser.c crc.c
	ar rcs libpngparser.a pngparser.o crc.o


solid: libpngparser solid.c
	$(CC) $(CFLAGS) -o solid solid.c libpngparser.a -lz

checkerboard: libpngparser checkerboard.c
	$(CC) $(CFLAGS) -o checkerboard checkerboard.c libpngparser.a -lz

filter: libpngparser filter.c
	$(CC) $(CFLAGS) -o filter filter.c libpngparser.a -lz -lm

circle: libpngparser circle.c
	$(CC) $(CFLAGS) -o circle circle.c libpngparser.a -lz -lm

rect: libpngparser rect.c
	$(CC) $(CFLAGS) -o rect rect.c libpngparser.a -lz

resize: libpngparser resize.c
	$(CC) $(CFLAGS) -o resize resize.c libpngparser.a -lm -lz


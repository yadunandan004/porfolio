from django.db import models
# Create your models here.

class About(models.Model):
	title=models.CharField(max_length=264,unique=True)
	aboutText=models.CharField(max_length=1000)
	imgPath=models.CharField(max_length=264)

class Contact(models.Model):
	name=models.CharField(max_length=264,unique=True)
	info=models.CharField(max_length=264,unique=True)

class Skill(models.Model):
	stype=models.CharField(max_length=264,default="Other")
	sname=models.CharField(max_length=264,unique=True)


class School(models.Model):
	name=models.CharField(max_length=264,primary_key=True)
	term=models.CharField(max_length=264,unique=True)
	degree=models.CharField(max_length=1000)
	gpa=models.CharField(max_length=264)
	courses=models.CharField(max_length=1000)
	def __str__(self):
		return self.name

class Work(models.Model):
	name=models.CharField(max_length=264,primary_key=True)
	title=models.CharField(max_length=264)
	term=models.CharField(max_length=264,unique=True)
	resp=models.CharField(max_length=2000)
	place=models.CharField(max_length=264,default="")
	def __str__(self):
		return self.name

class Project(models.Model):
	title=models.CharField(max_length=264,primary_key=True)
	summary=models.CharField(max_length=1000)
	github=models.URLField(blank=True)
	website=models.URLField(blank=True)
	tags=models.CharField(max_length=2000)
	imgPath=models.CharField(max_length=264)
	detail=models.TextField()


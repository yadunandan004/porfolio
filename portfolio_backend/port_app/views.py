from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from port_app.models import Skill,About,School,Work,Contact,Project
# Create your views here.
def index(req):
	if req.method=="GET":
		resp={}
		about=About.objects.order_by('id')
		resp['title']=about[0].title
		resp['aboutText']=about[0].aboutText
		resp['imgPath']="static/"+about[0].imgPath
		contacts=Contact.objects.order_by('id')
		for cnt in contacts:
			resp[cnt.name]=cnt.info
		
		skills=Skill.objects.order_by('id')
		for skl in skills:
			if resp.get(skl.stype) is None:
				resp[skl.stype]=[skl.sname]
			else:
				resp[skl.stype].append(skl.sname)
		school=School.objects.order_by('name')
		resp['school']=[]
		for scl in school:
			resp['school'].append({'name':scl.name,'term':scl.term,'degree':scl.degree,'gpa':scl.gpa,'courses':scl.courses.split(",")})
		work=Work.objects.order_by('name')
		resp['work']=[]
		for wrk in work:
			resp['work'].append({'name':wrk.name,'term':wrk.term,'title':wrk.title,'place':wrk.place,'resp':wrk.resp.split(",")})
		projects=Project.objects.order_by('title')
		resp['projects']=[]
		for prj in projects:
			resp['projects'].append({'title':prj.title,'summary':prj.summary,'github':prj.github,'website':prj.website,'tags':prj.tags.split(","),'imgPath':"static/"+prj.imgPath,'detail':prj.detail})
		return JsonResponse(resp)
	else:
		return HttpResponse("Send a Post request!!")
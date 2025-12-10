import React, { useState } from 'react';
import './NewProjectModal.css';

const NewProjectForm = ({ isOpen, onClose, onSave }) => {
  const [language, setLanguage] = useState('english');
  const [formData, setFormData] = useState({
    titleEn: '',
    titleAr: '',
    shortDescEn: '',
    shortDescAr: '',
    fullDescEn: '',
    fullDescAr: '',
    category: '',
    tags: '',
    imageUrl: '',
    imageAlt: '',
    projectUrl: '',
    seoTitle: '',
    metaDesc: '',
    urlSlug: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.titleEn || !formData.shortDescEn) {
      alert('Please fill in required fields (English Title and Short Description)');
      return;
    }

    // Create project object
    const newProject = {
      id: Date.now(),
      image: formData.imageUrl || '/default-project.png',
      title: formData.titleEn,
      titleAr: formData.titleAr,
      description: formData.shortDescEn,
      descriptionAr: formData.shortDescAr,
      fullDescription: formData.fullDescEn,
      fullDescriptionAr: formData.fullDescAr,
      category: formData.category,
      tags: formData.tags.split(',').map(tag => tag.trim()),
      codeLink: formData.projectUrl,
      demoLink: formData.projectUrl,
      seo: {
        title: formData.seoTitle,
        description: formData.metaDesc,
        slug: formData.urlSlug
      }
    };

    onSave(newProject);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      titleEn: '',
      titleAr: '',
      shortDescEn: '',
      shortDescAr: '',
      fullDescEn: '',
      fullDescAr: '',
      category: '',
      tags: '',
      imageUrl: '',
      imageAlt: '',
      projectUrl: '',
      seoTitle: '',
      metaDesc: '',
      urlSlug: ''
    });
    setLanguage('english');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="npf-accordion-container">
      <div className="npf-accordion-content">
        <div className={`npf-header ${language === 'arabic' ? 'npf-rtl' : ''}`}>
          <h2>{language === 'arabic' ? 'إضافة مشروع جديد' : 'Add New Project'}</h2>
          <button className="npf-close-btn" onClick={handleClose}>
            <span>✕</span>
          </button>
        </div>

        <div className="npf-body">
          {/* Language Toggle */}
          <div className="npf-language-toggle">
            <button
              className={`npf-lang-btn ${language === 'english' ? 'active' : ''}`}
              onClick={() => setLanguage('english')}
            >
              English
            </button>
            <button
              className={`npf-lang-btn ${language === 'arabic' ? 'active' : ''}`}
              onClick={() => setLanguage('arabic')}
            >
              العربية
            </button>
          </div>

          {/* English Fields */}
          {language === 'english' && (
            <div className="npf-language-section">
              <div className="npf-form-group">
                <label>Project Title (English) *</label>
                <input
                  type="text"
                  name="titleEn"
                  value={formData.titleEn}
                  onChange={handleInputChange}
                  placeholder="Enter project title in English..."
                  className="npf-input"
                />
              </div>

              <div className="npf-form-group">
                <label>Short Description (English) *</label>
                <textarea
                  name="shortDescEn"
                  value={formData.shortDescEn}
                  onChange={handleInputChange}
                  placeholder="Brief project description..."
                  className="npf-textarea npf-textarea-short"
                  rows="3"
                />
              </div>

              <div className="npf-form-group">
                <label>Full Description (English)</label>
                <div className="npf-editor-toolbar">
                  <button type="button" title="Heading"><i className="icon-h"></i>H</button>
                  <button type="button" title="Bold"><strong>B</strong></button>
                  <button type="button" title="Italic"><em>I</em></button>
                  <button type="button" title="Underline"><u>U</u></button>
                  <button type="button" title="Strikethrough"><s>S</s></button>
                  <button type="button" title="List">≡</button>
                  <button type="button" title="Align">⊟</button>
                  <button type="button" title="Align">≣</button>
                  <button type="button" title="Link">🔗</button>
                  <button type="button" title="Code">{'< >'}</button>
                </div>
                <textarea
                  name="fullDescEn"
                  value={formData.fullDescEn}
                  onChange={handleInputChange}
                  placeholder="Detailed project description..."
                  className="npf-textarea npf-textarea-tall"
                  rows="6"
                />
                <small className="npf-hint">Use H1, H2, H3 headings for proper content hierarchy</small>
              </div>
            </div>
          )}

          {/* Arabic Fields */}
          {language === 'arabic' && (
            <div className="npf-language-section npf-arabic-section">
              <div className="npf-form-group">
                <label className="npf-rtl">عنوان المشروع (بالعربية)</label>
                <input
                  type="text"
                  name="titleAr"
                  value={formData.titleAr}
                  onChange={handleInputChange}
                  placeholder="أدخل عنوان المشروع بالعربية..."
                  className="npf-input npf-rtl"
                />
              </div>

              <div className="npf-form-group">
                <label className="npf-rtl">وصف مختصر (بالعربية)</label>
                <textarea
                  name="shortDescAr"
                  value={formData.shortDescAr}
                  onChange={handleInputChange}
                  placeholder="وصف موجز للمشروع..."
                  className="npf-textarea npf-textarea-short npf-rtl"
                  rows="3"
                />
              </div>

              <div className="npf-form-group">
                <label className="npf-rtl">الوصف الكامل (بالعربية)</label>
                <div className="npf-editor-toolbar npf-rtl">
                  <button type="button" title="Heading"><i className="icon-h"></i>H</button>
                  <button type="button" title="Bold"><strong>B</strong></button>
                  <button type="button" title="Italic"><em>I</em></button>
                  <button type="button" title="Underline"><u>U</u></button>
                  <button type="button" title="Strikethrough"><s>S</s></button>
                  <button type="button" title="List">≡</button>
                  <button type="button" title="Align">⊟</button>
                  <button type="button" title="Align">≣</button>
                  <button type="button" title="Link">🔗</button>
                  <button type="button" title="Code">{'< >'}</button>
                </div>
                <textarea
                  name="fullDescAr"
                  value={formData.fullDescAr}
                  onChange={handleInputChange}
                  placeholder="وصف تفصيلي للمشروع..."
                  className="npf-textarea npf-textarea-tall npf-rtl"
                  rows="6"
                />
                <small className="npf-hint npf-rtl">استخدم عناوين H1, H2, H3 للتسلسل الهرمي الصحيح للمحتوى</small>
              </div>

              {/* Category & Tags - Arabic */}
              <div className="npf-row">
                <div className="npf-form-group npf-half">
                  <label className="npf-rtl">التصنيف</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="مثال: تطوير الويب"
                    className="npf-input npf-rtl"
                  />
                </div>
                <div className="npf-form-group npf-half">
                  <label className="npf-rtl">الوسوم</label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="React, TypeScript, Node.js"
                    className="npf-input npf-rtl"
                  />
                </div>
              </div>

              {/* Image & Media - Arabic */}
              <div className="npf-section-title npf-rtl">الصورة والوسائط</div>

              <div className="npf-form-group">
                <label className="npf-rtl">رابط الصورة</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  className="npf-input npf-rtl"
                />
              </div>

              <div className="npf-form-group">
                <label className="npf-rtl">النص البديل للصورة</label>
                <input
                  type="text"
                  name="imageAlt"
                  value={formData.imageAlt}
                  onChange={handleInputChange}
                  placeholder="نص وصفي لإمكانية الوصول..."
                  className="npf-input npf-rtl"
                />
                <small className="npf-hint npf-rtl">مطلوب لتحسين محركات البحث وإمكانية الوصول</small>
              </div>

              <div className="npf-form-group">
                <label className="npf-rtl">رابط المشروع</label>
                <input
                  type="text"
                  name="projectUrl"
                  value={formData.projectUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="npf-input npf-rtl"
                />
              </div>

              {/* SEO Optimization - Arabic */}
              <div className="npf-section-title npf-rtl">تحسين محركات البحث</div>

              <div className="npf-form-group">
                <label className="npf-rtl">عنوان SEO (وسم {'<title>'} للصفحة)</label>
                <input
                  type="text"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleInputChange}
                  placeholder="عنوان محسّن لمحركات البحث..."
                  className="npf-input npf-rtl"
                />
                <small className="npf-hint npf-rtl">0/{formData.seoTitle.length} حرف (الأمثل: 50-60)</small>
              </div>

              <div className="npf-form-group">
                <label className="npf-rtl">الوصف التعريفي</label>
                <textarea
                  name="metaDesc"
                  value={formData.metaDesc}
                  onChange={handleInputChange}
                  placeholder="وصف موجز لنتائج محركات البحث..."
                  className="npf-textarea npf-textarea-short npf-rtl"
                  rows="3"
                />
                <small className="npf-hint npf-rtl">0/{formData.metaDesc.length} حرف (الأمثل: 150-160)</small>
              </div>

              <div className="npf-form-group">
                <label className="npf-rtl">معرّف الرابط</label>
                <input
                  type="text"
                  name="urlSlug"
                  value={formData.urlSlug}
                  onChange={handleInputChange}
                  placeholder="project-url-slug"
                  className="npf-input npf-rtl"
                />
                <small className="npf-hint npf-rtl">معاينة: /projects/{formData.urlSlug || 'your-slug'}</small>
              </div>
            </div>
          )}

          {/* Category & Tags - English only shows when English is selected */}
          {language === 'english' && (
            <>
              <div className="npf-row">
                <div className="npf-form-group npf-half">
                  <label>Category</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="e.g., Web Development"
                    className="npf-input"
                  />
                </div>
                <div className="npf-form-group npf-half">
                  <label>Tags</label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="React, TypeScript, Node.js"
                    className="npf-input"
                  />
                </div>
              </div>

              {/* Image & Media */}
              <div className="npf-section-title">Image & Media</div>

              <div className="npf-form-group">
                <label>Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  className="npf-input"
                />
              </div>

              <div className="npf-form-group">
                <label>Image Alt Text</label>
                <input
                  type="text"
                  name="imageAlt"
                  value={formData.imageAlt}
                  onChange={handleInputChange}
                  placeholder="Descriptive alt text for accessibility..."
                  className="npf-input"
                />
                <small className="npf-hint">Required for SEO and accessibility</small>
              </div>

              <div className="npf-form-group">
                <label>Project URL</label>
                <input
                  type="text"
                  name="projectUrl"
                  value={formData.projectUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="npf-input"
                />
              </div>

              {/* SEO Optimization */}
              <div className="npf-section-title">SEO Optimization</div>

              <div className="npf-form-group">
                <label>SEO Title (Page {'<title>'} Tag)</label>
                <input
                  type="text"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleInputChange}
                  placeholder="Optimized title for search engines..."
                  className="npf-input"
                />
                <small className="npf-hint">0/{formData.seoTitle.length} characters (optimal: 50-60)</small>
              </div>

              <div className="npf-form-group">
                <label>Meta Description</label>
                <textarea
                  name="metaDesc"
                  value={formData.metaDesc}
                  onChange={handleInputChange}
                  placeholder="Brief description for search engine results..."
                  className="npf-textarea npf-textarea-short"
                  rows="3"
                />
                <small className="npf-hint">0/{formData.metaDesc.length} characters (optimal: 150-160)</small>
              </div>

              <div className="npf-form-group">
                <label>URL Slug</label>
                <input
                  type="text"
                  name="urlSlug"
                  value={formData.urlSlug}
                  onChange={handleInputChange}
                  placeholder="project-url-slug"
                  className="npf-input"
                />
                <small className="npf-hint">Preview: /projects/{formData.urlSlug || 'your-slug'}</small>
              </div>
            </>
          )}
        </div>

        <div className={`npf-footer ${language === 'arabic' ? 'npf-rtl' : ''}`}>
          <button className="npf-btn npf-btn-primary" onClick={handleSubmit}>
            <span className="npf-btn-icon">💾</span>
            {language === 'arabic' ? 'حفظ المشروع' : 'Save Project'}
          </button>
          <button className="npf-btn npf-btn-secondary" onClick={handleClose}>
            <span className="npf-btn-icon">✕</span>
            {language === 'arabic' ? 'إلغاء' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProjectForm;